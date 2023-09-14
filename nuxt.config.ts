// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      backendUrl: process.env.BACKEND_URL,
      oauthClientId: process.env.OAUTH_CLIENT_ID,
      oauthRedirectUri: process.env.OAUTH_REDIRECT_URI
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
