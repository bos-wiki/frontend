// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      // FIXME: some local shenanigans about localhost vs 127.0.0.1
      tempAuthUrl: process.env.TEMP_AUTH_URL,
      referrer: process.env.REFERRER,
    }
  },
  routeRules: {
    '/profile': { ssr: false },
    '/dashboard': { ssr: false }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-svgo'],
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: '0.0.0.0',
      }
    }
  },
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
    ]
  }
})
