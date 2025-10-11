// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
 //custom  tailwindcss path
 tailwindcss: {
  cssPath: "`/assets/main.css",
 },
 compatibilityDate: "2025-07-15",
 devtools: { enabled: true },
 runtimeConfig: {
  MONGOOSE_URI: process.env.MONGOOSE_URI,
 },
 nitro: {
  plugins: ["@/server/db/index.ts", "@babel/plugin-syntax-decorators"],
 },
 build: {
  transpile: [
   "@headlessui/vue",
   "vue-toastification",
   "@headlessui/tailwindcss",
  ],
 },
});
