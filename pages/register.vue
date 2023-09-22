<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";

definePageMeta({
  middleware: ['guest'],
  layout: 'auth'
})

const user = ref(null);
const auth = useAuthStore()

const form = ref({
  email: null,
  username: null,
  first_name: null,
  last_name: null,
  password: null,
  password_confirmation: null,
});

const errors = ref({
  email: null,
  username: null,
  first_name: null,
  last_name: null,
  password: null,
  password_confirmation: null,
});

const register = async () => {
  const {data, error} = await auth.register(form.value)

  if (error.value) {
    console.log(data, error.value)
    errors.value = error.value.data.errors
    return
  }

  if (!error.value) {
    return navigateTo("/profile", {replace: true});
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <form class="flex flex-col space-y-4 w-full">
      <div class="md:flex md:space-x-6 md:space-y-0 space-y-4">
        <div class="md:w-1/2">
          <label class="block">Vorname</label>
          <input
            v-model="form.first_name"
            class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
            :class="{ 'border-red-500': errors.first_name}"
            type="text"
          >
          <p v-if="errors.first_name" class="text-sm text-red-500">{{ errors.first_name[0] }}</p>
        </div>
        <div class="md:w-1/2">
          <label class="block">Nachname</label>
          <input
            v-model="form.last_name"
            class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
            :class="{ 'border-red-500': errors.last_name}"
            type="text"
          >
          <p v-if="errors.last_name" class="text-sm text-red-500">{{ errors.last_name[0] }}</p>
        </div>
      </div>
      <div>
        <label class="block">E-Mail</label>
        <input
          v-model="form.email"
          class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
          :class="{ 'border-red-500': errors.email}"
          type="text"
        >
        <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email[0] }}</p>
      </div>
      <div>
        <label class="block">Username</label>
        <input
          v-model="form.username"
          class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
          :class="{ 'border-red-500': errors.username}"
          type="text"
        >
        <p v-if="errors.username" class="text-sm text-red-500">{{ errors.username[0] }}</p>
      </div>
      <div>
        <label class="block">Passwort</label>
        <input
          v-model="form.password"
          class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
          type="password"
          :class="{ 'border-red-500': errors.password}"
        >
        <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password[0] }}</p>
      </div>
      <div>
        <label class="block">Passwort bestätigen</label>
        <input
          v-model="form.password_confirmation"
          class="w-full border border-gray-300 focus:border-red-500 focus:ring-red-500"
          :class="{ 'border-red-500': errors.password_confirmation || errors.password}"
          type="password"
        >
        <p v-if="errors.password_confirmation" class="text-sm text-red-500">{{ errors.password_confirmation[0] }}</p>
      </div>
    </form>
    <button
      @click="register"
      class="w-full block bg-black text-white p-4 hover:text-white hover:bg-red-500 mt-12"
      type="submit"
    >
      Registrieren
    </button>
  </div>
</template>