// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: ['~/assets/css/main.css', 'maplibre-gl/dist/maplibre-gl.css'],
  runtimeConfig: {
    public: {
      environment: process.env.ENVIRONMENT,
      apiUrl: process.env.API_URL,
      tempAuthUrl: process.env.TEMP_AUTH_URL,
      referrer: process.env.REFERRER,
      mapUrl: process.env.MAP_URL,
    }
  },
  routeRules: {
    '/profile': {ssr: false},
    '/dashboard': {ssr: false}
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
  },
  app: {
    head: {
      title: 'bos.wiki',
      script: [
        {
          src: '/js/formbricks.js'
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.usefathom.com/script.js',
          'data-spa': 'auto',
          'data-site': 'AAHSAIEE',
          'defer': true
        },
      ]
    }
  },
  plugins: [
    '~/plugins/scrollToTop.client.ts',
  ]
})
