import {defineStore} from "pinia";
import {useApiFetch} from "~/composables/useApiFetch";

type User = {
  id: string;
  name: string;
  email: string;
}

type Credentials = {
  email: string;
  password: string;
}

type RegistrationInfo = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User|null>(null)

  const isLoggedIn = computed(() => !!user.value)

  const register = async (info: RegistrationInfo) => {
    await useApiFetch("/sanctum/csrf-cookie");

    const register = await useApiFetch("/register", {
      method: "POST",
      body: info,
    });

    await fetchUser();

    return register;
  }

  const fetchUser = async () => {
    const {data, error} = await useApiFetch('/api/user');
    if (error.value) {
      return navigateTo('/login', {replace: true})
    }
    user.value = data.value as User;
  }

  const login = async (credentials: Credentials) => {
    await useApiFetch('/sanctum/csrf-cookie');

    const login = await useApiFetch('/login', {
      method: 'POST',
      body: credentials,
    })

    await fetchUser();

    return login;
  }

  const logout = async () => {
    await useApiFetch('/sanctum/csrf-cookie');
    await useApiFetch('/logout', { method: 'POST'});
    user.value = null;
    return navigateTo('/login', {replace: true})
  }

  return {
    user,
    isLoggedIn,
    register,
    login,
    fetchUser,
    logout,
  };
})