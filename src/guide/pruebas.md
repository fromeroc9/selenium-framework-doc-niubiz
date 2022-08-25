# Pruebas E2E

E2E Testing es una técnica que prueba su aplicación desde el navegador web hasta el back-end de su aplicación, así como pruebas de integraciones con API y servicios de terceros. Este tipo de pruebas son excelentes para asegurarse de que toda su aplicación funcione como un todo cohesivo.

Selenium es un framework de automatización de pruebas para aplicaciones web. Esta herramienta está soportada en varios lenguajes de programación, y además, cuenta con la capacidad de ejecutarse en la mayoría de los navegadores modernos en diferentes sistemas operativos.

![Selenium](/images/prueba/arquitectura.png)

## Primera Prueba Web

Antes de escribir codigo, es bueno conocer lo que se va automatizar, para este ejemplo se va utilizar la siguiente web [My Store](http://automationpractice.com/)

![My Store](/images/prueba/sitioprueba.png)

### 1. Creamos el flujo a probar

Ubicación: `src/main/resources/features`

```ts
//Authentication.feature
Feature: Authentication

    @login
    Scenario Outline: Login Passed
        Given Estoy en la práctica de automatización
        And Intento iniciar sesión en la página web
        When escribo mi correo y contraseña "<CP>"
        Then Verifico que el usuario es Ramon Garcia
        Examples:
            | CP |
            | 1  |  //Datos del Excel
```

### 2. Armar los Steps

Ubicación: `src/main/java/com.niubiz.bot.fronted/steps`

```java
//AuthenticationStep.java
package com.niubiz.bot.frontend.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthenticationStep {

    @Given("^Estoy en la practica de automatizacion$")
    public void estoyEnLaPracticaDeAutomatizacion() throws Throwable {
        
    }

    @And("^Intento iniciar sesion en la pagina web$")
    public void intentoIniciarSesionEnLaPaginaWeb() throws Throwable {
        
    }

    @When("^escribo mi correo y contrasena \"([^\"]*)\"$")
    public void escriboMiCorreoYContrasena(String cp) throws Throwable {
        
    }

    @Then("^Verifico que el usuario es Ramon Garcia$")
    public void verificoQueElUsuarioEsRamonGarcia() throws Throwable {
        
    }
}
```

### 3. Armar la data de prueba

Ubicación: `src/main/resources/excel`

Como vamos a probar el inicio de sesión del aplicativo necesito los siguiente datos

![Excel Data](/images/prueba/dataexcel.png)

### 4. Armar los Objects Page

En este ejemplo debemos armar los object del sitio web y de la data en excel

**Excel Objects**

Ubicación: `src/main/java/com.niubiz.bot.fronted/pages/objects`

Se debe indicar que tipo de valor vas a recibir o estar declarando en el excel.

```java
//ExcelObjects.java
package com.niubiz.bot.frontend.pages.objects;

public class ExcelObjects {

    public static final String EXCEL_DOC = "excel/data.xlsx";
    public static final String PAGE_NAME = "Login";
    //Login
    public static final String COL_USER = "Correo";
    public static final String COL_PASS = "Password";
}
```

**Web Locator**

Ubicación: `src/main/java/com.niubiz.bot.fronted/pages/objects`

Por cada pagina que se va navegando se va creando nueva archivo ts para guardar los locator. Si desea trabajar todo en un solo archivo para guardar todos sus locator solo recordar el orden.

```java
//HomeObjects.java
package com.niubiz.bot.frontend.pages.objects;

import org.openqa.selenium.By;

public class HomeObjects {

    public By BTN_SIGNIN = By.className("login");
    public By LBL_USER = By.xpath("//*[@class='account']//span");

}
//LoginObjects.java
package com.niubiz.bot.frontend.pages.objects;

import org.openqa.selenium.By;

public class LoginObjects {

    public static final By INPUT_EMAIL = By.id("email");
    public static final By INPUT_PASSWORD = By.id("passwd");
    public static final By BTN_SIGNIN = By.id("SubmitLogin");

}
```

### 5. Secuencia del flujo programado

Ubicación: `src/main/java/com.niubiz.bot.fronted/pages`

```java
package com.niubiz.bot.frontend.pages.pages;

import com.niubiz.bot.frontend.base.BaseClass;
import com.niubiz.bot.frontend.helpers.Hook;
import com.niubiz.bot.frontend.pages.objects.ExcelObjects;
import com.niubiz.bot.frontend.pages.objects.HomeObjects;
import com.niubiz.bot.frontend.pages.objects.LoginObjects;
import com.niubiz.bot.frontend.utility.ExcelReader;
import com.niubiz.bot.frontend.utility.GenerateWord;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

public class AuthenticationPage extends BaseClass {
    private WebDriver driver;
    private GenerateWord generateWord = new GenerateWord();

    private HomeObjects ho = new HomeObjects();
    private LoginObjects lo = new LoginObjects();

    String mensaje;

    public AuthenticationPage(WebDriver driver){
        super(driver);
        this.driver = Hook.getDriver();
    }

    private List<HashMap<String, String>> getData() throws Throwable {
        return ExcelReader.data(ExcelObjects.EXCEL_DOC, ExcelObjects.PAGE_NAME);
    }

    public void step1() throws Throwable {
        mensaje = "Se ingreso a la pagina My Store";
        try {
            cargarBrowser(driver,"http://automationpractice.com/index.php");

            stepPass(driver, mensaje);
            generateWord.sendText(mensaje);
            generateWord.addImageToWord(driver);
        } catch (Exception we){
            stepFail(driver,"Fallo en tiempo de respuesta : " + we.getMessage());
            generateWord.sendText("Fallo en tiempo de respuesta");
            generateWord.addImageToWord(driver);
        }
    }

    public void step2() throws Throwable {
        mensaje = "Se ingreso a la pagina de login";
        System.out.println(mensaje);
        try {
            click(driver, ho.BTN_SIGNIN);

            stepPass(driver, mensaje);
            generateWord.sendText(mensaje);
            generateWord.addImageToWord(driver);
        } catch (Exception we){
            stepFail(driver,"Fallo en tiempo de respuesta : " + we.getMessage());
            generateWord.sendText("Fallo en tiempo de respuesta");
            generateWord.addImageToWord(driver);
        }
    }

    public void step3(String cp) throws Throwable {
        mensaje = "Se ingresa las credenciales";
        System.out.println(mensaje);
        try {
            String Correo = getData().get(Integer.parseInt(cp) - 1).get(ExcelObjects.COL_USER);
            String Password = getData().get(Integer.parseInt(cp) - 1).get(ExcelObjects.COL_PASS);

            typeText(driver, lo.INPUT_EMAIL, Correo);
            typeText(driver, lo.INPUT_PASSWORD, Password);
            click(driver, lo.BTN_SIGNIN);

            stepPass(driver, mensaje);
            generateWord.sendText(mensaje);
            generateWord.addImageToWord(driver);
        } catch (Exception we){
            stepFail(driver,"Fallo en tiempo de respuesta : " + we.getMessage());
            generateWord.sendText("Fallo en tiempo de respuesta");
            generateWord.addImageToWord(driver);
        }
    }

    public void step4() throws Throwable {
        mensaje = "Se valida el ingreso de sesion";
        System.out.println(mensaje);
        try {
            String Username = driver.findElement(ho.LBL_USER).getText();
            if (Username.equalsIgnoreCase("Ramon Garcia")){
                stepPass(driver, mensaje);
                generateWord.sendText(mensaje);
            }else{
                stepFail(driver, "Ingreso invalido");
                generateWord.sendText("Ingreso invalido");
            }
            generateWord.addImageToWord(driver);
        } catch (Exception we){
            stepFail(driver,"Fallo en tiempo de respuesta : " + we.getMessage());
            generateWord.sendText("Fallo en tiempo de respuesta");
            generateWord.addImageToWord(driver);
        }
        driver.close();
    }
}
```

### 6. Añadimos a la secuencia programada a los steps

Ubicación: `src/main/java/com.niubiz.bot.fronted/steps`

```java
package com.niubiz.bot.frontend.steps;

import com.niubiz.bot.frontend.pages.pages.AuthenticationPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

public class AuthenticationStep {
    private WebDriver driver;
    private final AuthenticationPage ap = new AuthenticationPage(driver);

    @Given("^Estoy en la practica de automatizacion$")
    public void estoyEnLaPracticaDeAutomatizacion() throws Throwable {
        ap.step1();
    }

    @And("^Intento iniciar sesion en la pagina web$")
    public void intentoIniciarSesionEnLaPaginaWeb() throws Throwable {
        ap.step2();
    }

    @When("^escribo mi correo y contrasena \"([^\"]*)\"$")
    public void escriboMiCorreoYContrasena(String cp) throws Throwable {
        ap.step3(cp);
    }

    @Then("^Verifico que el usuario es Ramon Garcia$")
    public void verificoQueElUsuarioEsRamonGarcia() throws Throwable {
        ap.step4();
    }
}
```

## Primera Prueba API

Antes de escribir codigo, es bueno conocer lo que se va automatizar, para este ejemplo se va utilizar la siguiente API [JsonPlaceHolder](https://jsonplaceholder.typicode.com/)

![Sitio API](/images/prueba/sitiopruebaapi.png)

### 1. Creamos el flujo a probar

Ubicación: `src/main/resources/features`

```ts
//TestApi.feature
Feature: Authentication

    @post-api 
    Scenario Outline: Postear
        Given Quiero Publicar un nuevo posts "<CP>"
        When Veo todos mis posts "<CP>"
        Examples:
            | CP |
            | 1  |
```

### 2. Armar los Steps

Ubicación: `src/main/java/com.niubiz.bot.fronted/steps`

```java
//TestApiStep.java
package com.niubiz.bot.frontend.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class TestApiStep {

    @Given("^Quiero Publicar un nuevo posts \"([^\"]*)\"$")
    public void quieroPublicarUnNuevoPosts(String cp) throws Throwable {

    }

    @When("^Veo todos mis posts \"([^\"]*)\"$")
    public void veoTodosMisPosts(String cp) throws Throwable {

    }
}

```
 
### 3. Armar la data de prueba

Ubicación: `cypress/resorces/fixture`

Como vamos a probar la api del aplicativo necesito los siguiente datos

![Analisis de API](/images/prueba/dataapi.png)

Para estas pruebas vamos ha realizar ejemplos de POST y GET por eso vamos a omitir el valor `id`

**Si se trabaja con excel**

![Analisis de API](/images/prueba/dataapiexcel.png)

### 4. Armar los Objects

En este ejemplo debemos armar los locadores de la data en excel

**Excel Objects**

Ubicación: `src/main/java/com.niubiz.bot.fronted/pages/objects`

Se debe indicar que tipo de valor vas a recibir o estar declarando en el excel.

```java
//ExcelObjects.java
package com.niubiz.bot.frontend.pages.objects;

public class ExcelObjects {

    public static final String EXCEL_DOC = "excel/data.xlsx";
    public static final String PAGE_SHEET2 = "Api";
    //API
    public static final String COL_URL = "url";
    public static final String COL_USERID = "userId";
    public static final String COL_TITLE = "title";
    public static final String COL_BODY = "body";
    public static final String COL_RESPONSE = "response";
}
```

### 5. Armar los Model

Ubicación: `src/main/java/com.niubiz.bot.fronted/collections/model`

```java
//PostsModel.java
package com.niubiz.bot.frontend.collections.model;

public class PostsModel {

    private String url;
    private int userId;
    private String title;
    private String body;
    private String response;

    public String getUrl() { return url; }

    public void setUrl(String url) { this.url = url; }

    public int getUserId() { return userId; }

    public void setUserId(int userId) { this.userId = userId; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getBody() { return body; }

    public void setBody(String body) { this.body = body; }

    public String getResponse() { return response; }

    public void setResponse(String response) { this.response = response; }
}

```

### 6. Armar la API

Ubicación: `src/main/java/com.niubiz.bot.fronted/collections/api`

```java
package com.niubiz.bot.frontend.collections.api;

import com.niubiz.bot.frontend.collections.model.PostsModel;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.IOException;

public class Posts {

    private PostsModel post;

    public Posts(PostsModel post) {
        this.post = post;
    }

    private JSONObject postData(){
        JSONObject data = new JSONObject();
        data.put("title", post.getTitle());
        data.put("body", post.getBody());
        data.put("userId", post.getUserId());

        return data;
    }

    public JSONObject registrar() throws IOException, ParseException {
        StringEntity entity = new StringEntity(postData().toJSONString());

        HttpPost request = new HttpPost(post.getUrl());
        request.setHeader(HttpHeaders.CONTENT_TYPE, "application/json");
        request.setEntity(entity);

        HttpClient httpClient = HttpClientBuilder.create().build();
        HttpResponse httpResponse = httpClient.execute(request);
        HttpEntity httpEntity = httpResponse.getEntity();

        JSONObject responseJSON;
        JSONParser responseData = new JSONParser();
        if (httpResponse.getStatusLine().getStatusCode() == 201){
            String response = EntityUtils.toString(httpEntity);
            responseJSON = (JSONObject) responseData.parse(response);
        }else{
            String response = httpResponse.getStatusLine().getStatusCode() +":"+ EntityUtils.toString(httpEntity);
            responseJSON = (JSONObject) responseData.parse(response);
        }
        return responseJSON;
    }

    public JSONArray todos() throws IOException, ParseException {
        HttpGet request = new HttpGet(post.getUrl());
        request.setHeader(HttpHeaders.CONTENT_TYPE, "application/json");

        HttpClient httpClient = HttpClientBuilder.create().build();
        HttpResponse httpResponse = httpClient.execute(request);
        HttpEntity httpEntity = httpResponse.getEntity();

        JSONArray responseJSON;
        JSONParser responseData = new JSONParser();
        if (httpResponse.getStatusLine().getStatusCode() == 200){
            String response = EntityUtils.toString(httpEntity);
            responseJSON = (JSONArray) responseData.parse(response);
        }else{
            String response = httpResponse.getStatusLine().getStatusCode() +":"+ EntityUtils.toString(httpEntity);
            responseJSON = (JSONArray) responseData.parse(response);
        }
        return responseJSON;
    }
}
```

### 7. Armar los Request

Ubicación: `src/main/java/com.niubiz.bot.fronted/collections/request`

```java
package com.niubiz.bot.frontend.collections.request;

import com.niubiz.bot.frontend.base.BaseClass;
import com.niubiz.bot.frontend.collections.api.Posts;
import com.niubiz.bot.frontend.collections.model.PostsModel;
import com.niubiz.bot.frontend.pages.objects.ExcelObjects;;
import com.niubiz.bot.frontend.utility.ExcelReader;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import java.util.HashMap;
import java.util.List;

public class PostsApi extends BaseClass {

    private String step;
    private PostsModel pm = new PostsModel();

    private List<HashMap<String, String>> getData() throws Throwable {
        return ExcelReader.data(ExcelObjects.EXCEL_DOC, ExcelObjects.PAGE_SHEET2);
    }

    public void publicar(String cp) throws Throwable {
        step = "Publicar nuevo post";
        try {
            String url = getData().get(Integer.parseInt(cp) - 1).get(ExcelObjects.COL_URL);
            String title = getData().get(Integer.parseInt(cp) - 1).get(ExcelObjects.COL_TITLE);
            String body = getData().get(Integer.parseInt(cp) - 1).get(ExcelObjects.COL_BODY);
            int userId = Integer.parseInt(getData().get(Integer.parseInt(cp) - 1).get(ExcelObjects.COL_USERID));

            pm.setUrl(url);
            pm.setTitle(title);
            pm.setBody(body);
            pm.setUserId(userId);

            Posts posts = new Posts(pm);
            JSONObject response = posts.registrar();
            System.out.println(response);

            generateWord.sendText(step);
            generateWord.sendText(""+response);
        }catch (Throwable t) {
            generateWord.sendText("Error : [ Step : : "+step+" ] : " +  t.getMessage());
            throw t;
        }
    }

    public void todolosPost(String cp) throws Throwable {
        step = "Obtener todos los Posts";
        try {
            String url = getData().get(Integer.parseInt(cp) - 1).get(ExcelObjects.COL_URL);
            pm.setUrl(url);

            Posts posts = new Posts(pm);
            JSONArray response = posts.todos();
            System.out.println(response);

            generateWord.sendText(step);
            generateWord.sendText(""+response);
        }catch (Throwable t) {
            generateWord.sendText("Error : [ Step : : "+step+" ] : " +  t.getMessage());
            throw t;
        }
    }

}
```

### 8. Añadimos a la secuencia programada a los steps

Ubicación: `src/main/java/com.niubiz.bot.fronted/steps`

```java
package com.niubiz.bot.frontend.steps;
import com.niubiz.bot.frontend.collections.request.PostsApi;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class TestApiStep {

    private PostsApi postsApi = new PostsApi();

    @Given("^Quiero Publicar un nuevo posts \"([^\"]*)\"$")
    public void quieroPublicarUnNuevoPosts(String cp) throws Throwable {
        postsApi.publicar(cp);
    }

    @When("^Veo todos mis posts \"([^\"]*)\"$")
    public void veoTodosMisPosts(String cp) throws Throwable {
        postsApi.todolosPost(cp);
    }
}
```