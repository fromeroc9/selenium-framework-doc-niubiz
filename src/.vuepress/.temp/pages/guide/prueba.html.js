export const data = JSON.parse("{\"key\":\"v-52f1433c\",\"path\":\"/guide/prueba.html\",\"title\":\"\",\"lang\":\"es-ES\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"XPrueba E2E\",\"slug\":\"xprueba-e2e\",\"children\":[]},{\"level\":2,\"title\":\"Primera Prueba e2e\",\"slug\":\"primera-prueba-e2e\",\"children\":[]},{\"level\":2,\"title\":\"Probar la aplicación\",\"slug\":\"probar-la-aplicacion\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/prueba.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
