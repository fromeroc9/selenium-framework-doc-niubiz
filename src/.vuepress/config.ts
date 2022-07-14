import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './router'
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
	base: "/selenium-framework-doc/",
	lang: 'es-ES',
	title: 'Selenium',
	description: 'Documentación de Selenium Framework TSOFT',
	open: false,
	head: [['link', { rel: 'icon', href: 'images/logo.png' }]],
	theme: defaultTheme({
		logo: '/images/logo-texto.png',
		sidebar: sidebar,
		logoDark: '/images/logo_white.png',
    	colorMode: 'light'
	}),
	dest: "docs",
	plugins: [
		searchPlugin({
			'/': {
				placeholder: 'Buscar',
				isSearchable: (page) => page.path !== '/guide',
			}
		}),
	],
})