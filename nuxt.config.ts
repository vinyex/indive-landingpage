// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
	},
	colorMode: {
		preference: "light",
	},
	devtools: { enabled: true },
	modules: [
		"@nuxt/ui",
		"@nuxt/image",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Abel: true,
					Rubik: true,
					"Open Sans": true,
				},
			},
		],
	],
});