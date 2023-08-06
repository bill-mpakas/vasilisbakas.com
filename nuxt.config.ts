// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: { shim: false },
	devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
		viewer: true,
	},
});
