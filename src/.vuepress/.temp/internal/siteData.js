export const siteData = JSON.parse("{\"base\":\"/selenium-framework-doc-niubiz/\",\"lang\":\"es-ES\",\"title\":\"Selenium\",\"description\":\"Documentación de Selenium Framework\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.png\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/styles/index.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
