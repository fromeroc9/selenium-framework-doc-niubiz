import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './router'
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
	base: "/selenium-framework-doc-niubiz/",
	lang: 'es-ES',
	title: 'Selenium',
	description: 'Documentación de Selenium Framework',
	open: false,
	head: [
		['link', { rel: 'icon', href: '/selenium-framework-doc-niubiz/images/favicon.png' }],
		['link', { rel: "stylesheet", href: '/selenium-framework-doc-niubiz/styles/index.css'}]
	],
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