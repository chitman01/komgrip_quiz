// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  plugins: [
    { src: '~/plugins/fontawesome.js', mode: 'client' }
  ],

  css: [
    "@/assets/css/nucleo-icons.css",
    "@/assets/css/nucleo-svg.css",
    "@/assets/css/nucleo-svg.css",
    "@/assets/css/soft-ui-dashboard.css?v=1.0.3",
    // "https://kit.fontawesome.com/42d5adcbca.js",
  ],

})

