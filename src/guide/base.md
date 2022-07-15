# BunTest 💣

Cuando se trata de guardar los tiempos de ejecución de los diferentes scenario solo nos conformamos con el reporte generado.

Vamos a utilizar la configuración de BunTest para guardar estos datos podemos apoyar con diferentes servicios Headless CMS o su propio desarrollo.

BunTest fue probado con Strapi, Supabe, PocketBase.

## Requisitos

Deben descargar los siguiente archivos para el proyecto `web-automation-framework`

BunTest.java, BunEnv.java, Hook.java

[Descargar Archivos](https://fromeroc9.github.io/selenium-framework-doc/compress/BunTest.zip)

## Instalación

Copiar los siguiente en los siguiente directorio.

1. BunTest.java `com.tsoft.bot.frontend/utility`

2. BunEnv.java `com.tsoft.bot.frontend/helpers`

3. Hook.java `com.tsoft.bot.frontend/helpers` (Opcional)

Si no desea modificar su Hook por defecto de proyecto reemplace los siguientes métodos;

```java
//Debajo de "private static Screen screen" agregue
private static long startTime;
private static long endTime;

//Reemplace el método sceneario
@Before
public void scenario(Scenario scenario){
	startTime = System.currentTimeMillis();
	onTestStart(scenario.getName());
}

//Reemplace el método tearDown
@After
public void tearDown(Scenario scenario) throws Throwable {
	endTime = System.currentTimeMillis();
	onFinish();
	generateWord.endToWord(scenario.getStatus());

	BunTest jkmm = new BunTest();
	jkmm.setScenario(scenario);
	jkmm.setDateInicio(startTime);
	jkmm.setDateFin(endTime);
	jkmm.setTime(endTime - startTime);
	jkmm.ExecutionResultTest();
}
```

## Strapi

Si eres líder debes crear una tabla en strapi para guardar los datos de ejecución de los test y proporcionar al automatizador configurado el archivo BunEnv.java 

Para más detalles sobre permiso o el uso de strapi ver el siguiente video [Get started](https://youtu.be/h9vETeRiulY)

**Ejemplo**

Strapi nos proporciona el backend en forma de api como se observa la imagen tenemos la tabla creada test que cuenta con 7 parametros obligatorio para el proyecto en selenium, cada uno puede poner los nombre similar o relacionado (feature, tags, sceneario, inicio, fin, duración, estado). 

![Strapi](/images/bun/1.png)

### BunEnv 

Como ya se tiene la tabla creada en strapi, con permiso de creación publico o autentificados.

Se necesita configurar las variables

**Configuración Strapi**

```java
public class BunEnv {
    public static Boolean PowerBunTest = true;             //Encendido de BunTest por default false

    public static HashMap<String, String> config() {
        HashMap<String, String> env = new HashMap<>();
        //CONFIG INICIAL
        env.put("URL", "https://<HOST>:1337/api");         //Host de la api
        env.put("TABLE", "test");                          //Nombre de la tabla creada
        //CAMPOS TABLE
        env.put("PARAM_1", "feature");                     //Los 7 parametros
        env.put("PARAM_2", "scenario");
        env.put("PARAM_3", "tag");
        env.put("PARAM_4", "dateInicio");
        env.put("PARAM_5", "dateFin");
        env.put("PARAM_6", "time");
        env.put("PARAM_7", "estado");
        //CONFIG EXTRA
        env.put("HEADER_COUNT", "0");                     //Agregar la cantidad de header por default 0
        env.put("PARAM_BODY", "data");                    //Exclusivo para Strapi

        return env;
    }
}

//Si la api es autentificada agregar y modificar lo siguiente
env.put("HEADER_COUNT", "1");  
env.put("HEADER_1", "Authorization");    //El tipo de header agregado
env.put("HEADER_VAL_1", "<token>");      //El valor del header agregado
.
.
.
//Se puede agregar mas header si es necesario solo debe aumentar el header_count
//y seguir el ejemplo
env.put("HEADER_<num>", "<header>"); 
env.put("HEADER_VAL_<num>", "<header value>");
```

Como saber si mi configuración es correcto, BunTest nos mostrara un mensaje al ejecución. Las respuesta correcta que deberia obtener son las **2xx**, en caso de obtener una respuesta **4xx** o **5xx** la configuración realizada es incorrecta.

**Bun Configuración Correcta**

![Bun Status Code](/images/bun/3.png)

![Http Status Code](/images/bun/2.jpeg)

## Ejecución

Si se desea ver los resultados de ejecución no olvidar de activar el BunTest en BunEnv

Para mayor presición de respuesta se recomienda ejecutar el RunTest del proyecto como buenas practicas. Como no recomendado se puede ejecutar desde los sceneario de los feature no garantizamos los tiempos exactos de la ejecución.

`Nota` La duración de ejecución están en segundos

![Strapi Result](/images/bun/4.png)


