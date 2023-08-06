// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: '@nuxt-themes/typography',
	typescript: { shim: false },
	devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
		viewer: true,
	},
});
