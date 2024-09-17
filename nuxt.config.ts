// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon'],
  fonts:{
    families:[
      {name:"Inter", provider:"local"},
    ]
  },
  css: ['~/assets/css/fonts.css','~/assets/css/scrollbar.css'],
})