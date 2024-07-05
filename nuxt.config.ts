// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
app: {
	head: {
	    charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
	},
},
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-viewport"]
})