<template>
  <div class="w-full h-screen flex justify-center items-center">
    <button @click.prevent="openLoginWindow" type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Login</button>
  </div>
</template>


<script setup>
import crypto from 'crypto-js'
const config = useRuntimeConfig()

const email = ref()
const password = ref()
const state = ref()
const challenge = ref()

const loginUrl = computed(() => `${config.public.backendUrl}/oauth/authorize?client_id=${config.public.oauthClientId}&redirect_uri=${config.public.oauthRedirectUri}&response_type=code&scope=*&state=${state.value}&code_challenge=${challenge.value}&code_challenge_method=S256`)

const openLoginWindow = () => {
  window.open(loginUrl.value, 'popup', 'width=500,height=800');
}

const createRandomString = (num) => {
  return [...Array(num)].map(() => Math.random().toString(36)[2]).join('')
}

const base64Url = (string) => {
  return string.toString(crypto.enc.Base64)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
}

onMounted(() => {
  window.addEventListener('message', async (event) => {
    if (event.origin !== 'http://boswiki.localhost' || ! Object.keys(event.data).includes('access_token')) return

    const {
      token_type,
      access_token,
      expires_in,
      refresh_token
    } = event.data

    const {data} = await useFetch(`${config.public.backendUrl}/api/user`, {
      headers: new Headers({
        'Authorization': token_type + ' ' + access_token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
    })

    console.log(data.value)
  });

  state.value = createRandomString(40)
  const verifier = createRandomString(128)

  challenge.value = base64Url(crypto.SHA256(verifier))
  window.localStorage.setItem('state', state.value)
  window.localStorage.setItem('verifier', verifier)
})
</script>
