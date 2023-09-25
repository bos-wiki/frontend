import {defineStore} from "pinia";
import {useApiFetch} from "~/composables/useApiFetch";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

type Credentials = {
  email: string;
  password: string;
}

type RegistrationInfo = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User|null>(null)

  const isLoggedIn = computed(() => !!user.value)

  const register = async (info: RegistrationInfo) => {
    await useApiFetch("/sanctum/csrf-cookie");

    const {data, error} = await useApiFetch("/register", {
      method: "POST",
      body: info,
    });

    if (!error.value) {
      await fetchUser();
    }

    return {data, error};
  }

  const fetchUser = async () => {
    const {data, error} = await useApiFetch('/me');
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
    return navigateTo('/', {replace: true})
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