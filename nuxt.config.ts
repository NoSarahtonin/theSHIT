// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "nuxt-viewport",
    "@nuxtjs/tailwindcss"
  ],
  plugins: ["~/plugins/preline.client.ts"]
})