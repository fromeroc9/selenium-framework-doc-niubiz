## Instalación

```bash
# clone project
git clone https://github.com/example/web-automation-framework
# access folder
cd web-automation-framework
```

## Ejecución GUI

Ejecución de pruebas a travez de una interfaz web. 

Podemos ejecuctar los diferentes escenario por separado o inicializar todo el feature para su ejecución.

![Ejecución](/images/ejecucion/gui.png)


## Ejecución CLI

Similar que ejecutar selenium por GUI pero con comando en la terminal favorita

```bash
cd web-automation-framework

# To run scenarios with @debug1 and @debug2:
# Old version of Cucumber-jvm:
mvn test -Dcucumber.options="--tags @debug1 --tags @debug2"

# Actual version of Cucumber-jvm:
mvn test -Dcucumber.options="--tags '@debug1 and @debug2'"

# To run scenarios with @debug1 or @debug2:
#Old version of Cucumber-jvm:
mvn test -Dcucumber.options="--tags @debug1, @debug2"

#Actual version of Cucumber-jvm:
mvn test -Dcucumber.options="--tags '@debug1 or @debug2'"
```

## Estructura de Proyecto

Estructura de carpeta del framework trabajado.

``` 
┌─ src
|  └─ main
|     ├─ java
|     |  └─ frontend
|     |     ├─ base
│     |     |  └─ BaseClass.java
|     |     ├─ collections
│     |     |  ├─ api
│     |     |  ├─ model
│     |     |  └─ request
|     |     ├─ helpers
|     |     |  └─ Hook.java
|     |     ├─ listener
|     |     |  └─ Listener.java
|     |     ├─ pages
|     |     |  ├─ objects
|     |     |  └─ pages 
|     |     ├─ runner
|     |     |  └─ Run Test.java
|     |     ├─ steps
|     |     └─ utility
|     |        ├─ ExcelReader.java
|     |        ├─ ExtentReportUtil.java
|     |        ├─ FileHelper.java
|     |        ├─ GenerateWord.java
|     |        ├─ Sleeper.java
|     |        └─ StringHelper.java
|     └─ resources
|        ├─ config
|        |  ├─ extent-config.xml
|        |  └─ testng.xml 
|        ├─ driver
|        |  ├─ chrome
|        |  |  └─ chromedriver.exe
|        |  ├─ firefox
|        |  └─ ie
|        ├─ excel
|        |  └─ data.xlsx
|        ├─ features
|        ├─ template
|        └─ log.properties      
└─ target
   ├─ classes
   ├─ generated-sources
   └─ resultado
```

#### Global

| Carpeta | Descripción |
| ----------- | ----------- |
| src/main | Carpeta principal del proyecto |
| target | Carpeta donde se genera los reportes html, documento de word |

#### Java/Frontend

| Carpeta | Descripción |
| ----------- | ----------- |
base | Especializado para guardar acciones, el automatizador puede crear nuevas acciones de la API de Selenium 
collections | Carpeta especializada para las pruebas de API
helpers | Especializado para la configuración del driver `browser` a utilizar en las pruebas
listener | Almacena las configuraciones antes, durante y despues de la ejecución de las pruebas
pages | Especializado para contener funcionalidad de los steps a desarrollar
steps | Especializado para almacenar los pasos a desarrollar del feature a nivel funcional
runner | Especializado para la configuración de los casos a ejecutar
utily | Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creación de reportes, etc.

#### Java/Resource
| Carpeta | Descripción |
| ----------- | ----------- |
config | Configuraciones especiales del testng y extent report
driver | Especializado para almacenar los diferentes controladores por navegador
excel | Especializado para almacer los archivos excel
feature | Especializado para la creación de `.feture` (escenarios en Gherkin)
template | Configuraciones de plantilla para la generación del Word
log.properties | Configuraciones de log4j

#### Target
| Carpeta | Descripción |
| ----------- | ----------- |
classes | Genera la previa configuración del proyecto
generated-sources | Genera diferentes anotaciones
resultado | Almacena las capturas de pantalla y genera el reporte html y los documento word