// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src/',
  nitro: {
    preset: 'node',
  },
  devtools: { enabled: true }
})
