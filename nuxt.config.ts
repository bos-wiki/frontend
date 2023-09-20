// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      backendUrl: process.env.BACKEND_URL,
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
