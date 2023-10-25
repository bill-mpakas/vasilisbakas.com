// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  extends: '@nuxt-themes/typography',
  typescript: { shim: false },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    viewer: true,
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'json', 'vue', 'bash', 'html'],
    },
  },
});
