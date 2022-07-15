export const siteData = JSON.parse("{\"base\":\"/selenium-framework-doc/\",\"lang\":\"es-ES\",\"title\":\"Selenium\",\"description\":\"Documentación de Selenium Framework TSOFT\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"images/logo.png\"}]],\"locales\":{}}")

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
