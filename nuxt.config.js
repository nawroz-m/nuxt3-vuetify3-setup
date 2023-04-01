// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vuetify"],
  },

  //Configure SCSS assets file
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
