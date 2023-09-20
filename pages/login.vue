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
  <ContentWrapper class="mt-12 flex justify-center">
    <form @submit.prevent="login" class="flex flex-col space-y-4 w-full md:w-1/2">
      <div>
        <label class="block">E-Mail</label>
        <input class="w-full border border-gray-300 " type="text" v-model="form.email">
      </div>
      <div>
        <label class="block">Passwort</label>
        <input class="w-full border border-gray-300 " type="password" v-model="form.password">
      </div>
      <button class="bg-black text-white p-4" type="submit">Anmelden</button>
    </form>
  </ContentWrapper>
</template>
