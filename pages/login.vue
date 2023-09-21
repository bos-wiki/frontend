<script lang="ts" setup>
import {useAuthStore} from "~/stores/useAuthStore";

definePageMeta({
  middleware: ['guest']
})

const user = ref(null);
const auth = useAuthStore()

const form = ref({
  email: null,
  password: null
});

const login = async () => {
  const {error} = await auth.login(form.value)

  if(!error.value) {
    return navigateTo("/dashboard", {replace: true});
  }
}
</script>

<template>
  <ContentWrapper class="mt-12 flex flex-col items-center justify-center">
    <form @submit.prevent="login" class="flex flex-col space-y-4 w-full md:w-1/2">
      <div>
        <label class="block">E-Mail</label>
        <input class="w-full border border-gray-300 " type="text" v-model="form.email">
      </div>
      <div>
        <label class="block">Passwort</label>
        <input class="w-full border border-gray-300 " type="password" v-model="form.password">
      </div>
      <button class="bg-black text-white p-4 hover:text-white hover:bg-red-500" type="submit">Anmelden</button>
    </form>

    <div class="relative md:w-1/2 mt-12">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-200"></div>
      </div>
      <div class="relative flex justify-center text-sm font-medium leading-6">
        <span class="bg-white px-6 text-gray-900">Noch keinen Account?</span>
      </div>
    </div>

    <div class="mt-12 md:w-1/2 flex justify-center text-red-900 bg-red-50 border border-red-900 p-8">
      <IconsAlertFilled class="inline-flex text-red-500 h-7 w-7 mr-4"/> Aktuell kann man noch keine Accounts erstellen!
    </div>
  </ContentWrapper>
</template>
