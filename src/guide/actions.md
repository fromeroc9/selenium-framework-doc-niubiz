# BaseClass

Forma simplificada de selenium para realizar acciones como type, clear, click, select, value, sleep, read, write.

**Ubicación:** `com.niubiz.bot.fronted/base`

| Opción   | Default | Descripción |
|----------|---------|-------------|
| typeText | WebDriver driver, By locator, String inputText | Permite ingresar texto exclusivo a input |
| click | WebDriver driver, By locator | Permite realizar click con cualquier elemento que se encuentre en el DOM |
| clear | WebDriver driver, By locator | Permite eliminar el texto a inputs |
| selectByVisibleText | locator: string, value: string, xpath: boolean | Permite captura el valor `option text` |
| sleep | time : number | Permite realizar una pausa en la ejecución de la prueba `1000 = 1 seg` |
| getValue | WebDriver driver, By locator | Permite obtener el valor del input |
| isDisplayed | WebDriver driver, By locator | Permite validar si un elemento es visible |
| scroll | WebDriver driver, int x, int y | Permite realizar moviento de pagina en pixeles |
| zoom | WebDriver driver, int size | Permite realizar acercamiento a la pagina de 0 al 100% |
| cargarBrowser |  WebDriver driver, String url | Permite realizar la carga a la pagina a automatizar con su repectiva paso agregado al reporte |
| stepPass | WebDriver driver, String descripcion | Permite registrar el pase correcto al reporte |
| stepWarning | WebDriver driver, String descripcion | Permite registrar una alerta al reporte |
| stepFail | WebDriver driver, String descripcion | Permite registrar el pase incorrecto al reporte |

Todos los commads de selenium tienen una opciones que permiten cambiar el comportamiento predeterminado. Si desea crear su propio commads revise primero [Interactions](https://www.selenium.dev/documentation/webdriver/elements/interactions/)

***Ejemplo*** : Estructura de un BaseClass

```java
//No retorna nada
protected void NAME_OPTION(key : type) throws IOException {
    try {
        
    }catch (RuntimeException we){
        errorNoElementFound(driver, locator);
        throw we;
    }
}

//string retorna valor booleano
protected Boolean NAME_OPTION(key : type){
    try {
        
    }catch (NoSuchElementException we){
        driver.close();
        return false;
    }
}
```

## typeText

Permite ingresar texto exclusivo a input

**Sintaxis**

```java
protected void typeText(WebDriver driver, By locator, String inputText) throws IOException {
    try {
        driver.findElement(locator).sendKeys(inputText);
    }catch (RuntimeException we){
        errorNoElementFound(driver, locator);
        throw we;
    }
}
```

**Uso**

```java
//Si es solo id, css selector, xpath, element html
typeText(driver, "#input-password", "abc123")
typeText(driver, ".input-password", "abc123")
typeText(driver, "input[type='password']", "abc123")
typeText(driver, "//input[type='text']", "abc123")
```

Construido con [.sendKeys](https://www.selenium.dev/documentation/webdriver/elements/interactions/#send-keys)

## click

Permite realizar click con cualquier elemento que se encuentre en el DOM

**Sintaxis**

```java
protected void click(WebDriver driver, By locator) throws IOException {
    try {
        driver.findElement(locator).click();
    }catch (RuntimeException we){
        errorNoElementFound(driver, locator);
        throw we;
    }
}
```

**Uso**

```java
//Si es solo id, css selector, xpath, element html
click(driver, "#grabar")
click(driver, ".btn-submit")
click(driver, "input[type='submit']")
click(driver, "//[@id='Enviar']")
click(driver, "//button[text()='Validate']")
```

Construido con [.click](https://www.selenium.dev/documentation/webdriver/elements/interactions/#click)

## clear

Permite eliminar el texto a inputs

**Sintaxis**

```java
protected void clear(WebDriver driver, By locator) throws IOException {
    try {
        driver.findElement(locator).clear();
    }catch (RuntimeException we){
        errorNoElementFound(driver, locator);
        throw we;
    }
}
```

**Uso**

```java
//Si es solo id, css selector, xpath, element html
clear(driver, "#input-password")
clear(driver, ".input-password")
clear(driver, "input[type='password']")
clear(driver, "//input[type='text']")
```

Construido con [.clear](https://www.selenium.dev/documentation/webdriver/elements/interactions/#clear)

## selectByVisibleText

Permite captura el valor `option text`

**Sintaxis**

```java
protected void selectByVisibleText(WebDriver driver, By locator, String text) throws IOException {
    try {
        Select typeSelect = new Select(driver.findElement(locator));
        typeSelect.selectByVisibleText(text);
    }catch (RuntimeException we){
        errorNoElementFound(driver, locator);
        throw we;
    }
}
```

**Uso**

```java
//Si es solo id, css selector, xpath, element html
selectByVisibleText(driver, "#select-paises", "Argentina")
selectByVisibleText(driver, ".select2", "123")
selectByVisibleText(driver, "select", "argentina")
selectByVisibleText(driver, "//select[@id='channel']", "abc123")
```

Construido con [Select](https://www.selenium.dev/documentation/webdriver/elements/select_lists/)

## sleep

Permite realizar una pausa en la ejecución de la prueba `1000 = 1seg`

**Sintaxis**

```java
protected static void sleep(int milisegundos) {
    Sleeper.sleep(milisegundos);
}
```

**Uso**

```java
sleep(1000)
```

## getValue

Permite obtener el valor del input

**Sintaxis**

```java
protected String getValue(WebDriver driver, By locator) throws IOException {
    try {
        return driver.findElement(locator).getAttribute("value");
    }catch (RuntimeException we){
        errorNoElementFound(driver, locator);
        throw we;
    }
}
```

**Uso**

```java
//obtener valor de usuario y contraseña
String Usermane = getValue(driver, '#username')
// Output Jhoe Example
String Usermane = getValue(driver, "//input[@id='username']")
// Output Jhoe Example
```

## isDisplayed

Permite validar si un elemento es visible

**Sintaxis**

```java
protected Boolean isDisplayed(WebDriver driver, By locator){
    try {
        return driver.findElement(locator).isDisplayed();
    }catch (NoSuchElementException we){
        driver.close();
        return false;
    }
}
```

**Uso**

```java
String viewUser = isDisplayed(driver, '#username')
// Output true or false Example
String viewUser = isDisplayed(driver, "//input[@id='username']")
// Output false or true Example
```

## scroll

Permite realizar moviento de pagina en pixeles

**Sintaxis**

```java
public static void scroll(WebDriver driver, int x, int y) {
    try {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(" + x + "," + y + ")", "");
    } catch (RuntimeException t) {
        Logger.getLogger("[LOG]-Scroll: " + t);
        throw t;
    }
}
```

**Uso**

```java
//Mover 150px horizontal a la pagina
scroll(driver, 150, 0);
```

## zoom

Permite realizar acercamiento a la pagina de 0 al 100%

**Sintaxis**

```java
public static void zoom(WebDriver driver, int size) {
    try {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.body.style.zoom = '" + size + "%'");
    } catch (RuntimeException t) {
        Logger.getLogger("[LOG]-zoom: " + t);
        throw t;
    }
}
```

**Uso**

```java
//Zoom de 90% a una pagina
zoom(driver, 90);
```

## cargarBrowser

Permite realizar la carga a la pagina a automatizar con su repectiva paso agregado al reporte

**Sintaxis**

```java
public void cargarBrowser(WebDriver driver, String url) throws Throwable {
    try {
        if (StringUtils.isNotEmpty(url)) {
            driver.get(url);
            stepPass(driver, "Cargo correctamente la URL: '"+url+"'");
            generateWord.sendText("Cargo correctamente la URL: '"+url+"'");
            generateWord.sendBreak();
        } else {
            throw new Exception("Error al cargar la página, NO existe el parámetro URL del aplicativo ");
        }
    } catch ( NoSuchWindowException | NoSuchSessionException e ){
        stepFailNoShoot("[Error al cargar Browser] : Navegador se cerro inesperandamente : " + e.getMessage());
        generateWord.sendText("[Error al cargar Browser] : Navegador se cerro inesperandamente : " + e.getMessage());
        driver.close();
        throw e;
    } catch ( Throwable t ) {
        stepFail(driver, "[Error al cargar Browser] : " + t.getMessage());
        generateWord.sendText("[Error al cargar Browser] : " + t.getMessage());
        generateWord.addImageToWord(driver);
        driver.close();
        throw t;
    }
}
```

**Uso**

```java
//Cargar pagina xy y agrega paso al reporte
cargarBrowser(driver, "https://example.com.pe")
```

## stepPass

Permite registrar el pase correcto al reporte

**Sintaxis**

```java
protected static void stepPass(WebDriver driver, String descripcion) {
    try {
        ExtentReportUtil.INSTANCE.stepPass(driver, descripcion);
    } catch (RuntimeException t) {
        Logger.getLogger("[LOG]-StepPass: " + t);
        throw t;
    } catch (Exception e) {
        Logger.getLogger("[LOG]-StepPass: " + e);
    }
}
```

**Uso**

```java
stepPass(driver, "Paso 1 finalizado correctamente")
```

## stepWarning

Permite registrar una alerta al reporte

**Sintaxis**

```java
private static void stepWarning(WebDriver driver, String descripcion) throws Throwable {
    try {
        ExtentReportUtil.INSTANCE.stepWarning(driver, descripcion);
    } catch (RuntimeException t) {
        Logger.getLogger("[LOG]-StepWarning: " + t);
        throw t;
    }
}
```

**Uso**

```java
stepWarning(driver, "Paso 2 finalizado observado")
```

## stepFail

Permite registrar el pase incorrecto al reporte

**Sintaxis**

```java
protected void stepFail(WebDriver driver, String descripcion) throws Exception {
    try {
        ExtentReportUtil.INSTANCE.stepFail(driver, descripcion);
    } catch (RuntimeException t) {
        Logger.getLogger("[LOG]-StepFail: " + t);
        throw t;
    }
}
```

**Uso**

```java
stepFail(driver, "Paso 3 finalizado con errores")
```