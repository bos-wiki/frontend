<script lang="ts" setup>
import {useAuthStore} from "~/stores/useAuthStore";

definePageMeta({
  middleware: ['guest'],
  layout: 'auth'
})

const user = ref(null);
const auth = useAuthStore()

const form = ref({
  email: null,
  password: null
});

const login = async () => {
  const {error} = await auth.login(form.value)

  if (!error.value) {
    return navigateTo("/profile", {replace: true});
  }
}
</script>

<template>
  <div class="mt-12 flex flex-col items-center justify-center space-y-12">
    <form class="flex flex-col space-y-4 w-full">
      <div>
        <label class="block">E-Mail</label>
        <input
          v-model="form.email"
          class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
          type="text"
        >
      </div>
      <div>
        <label class="block">Passwort</label>
        <input
          v-model="form.password"
          class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
          type="password"
        >
      </div>
    </form>
    <button @click="login" class="w-full bg-black text-white p-4 hover:text-white hover:bg-red-500" type="submit">
      Anmelden
    </button>
    <div class="relative w-full my-12">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-200"></div>
      </div>
      <div class="relative flex justify-center text-sm font-medium leading-6">
        <span class="bg-white px-6 text-gray-900">Neu hier?</span>
      </div>
    </div>
    <NuxtLink
      to="/register"
      class="w-full p-4 border border-gray-300 flex justify-center hover:bg-black hover:text-white"
    >
      Hier Account erstellen
    </NuxtLink>
  </div>
</template>
