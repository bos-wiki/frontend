<template>
  <div class="w-full h-screen flex justify-center items-center">
    <h1>Logging in...</h1>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const state = urlParams.get('state');

  if (!code && !state) return
  if (state !== window.localStorage.getItem('state')) return

  fetch(config.public.backendUrl + '/oauth/token', {
    method: 'POST',
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: 4,
      redirect_uri: config.public.oauthRedirectUri,
      code_verifier: window.localStorage.getItem('verifier'),
      code
    })
  })
      .then(res => res.json())
      .then(resp => {
        window.opener.postMessage(resp);
        localStorage.removeItem('state');
        localStorage.removeItem('verifier');
        window.close();
      })
      .catch(e => {
        console.dir(e);
      });
})
</script>


