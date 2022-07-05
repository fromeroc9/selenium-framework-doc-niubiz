## Introducción

Este proyecto abarca a la utilización del framework Selenium para las pruebas de testing, creando producto util y usable para desarrollar diferentes tipos de pruebas.

Un framework de automatización nos permite tener un conjunto de pautas o reglas para la generación de casos de prueba y estandarizar la ejecución de pruebas tales como UI, API,entre otras.

El propósito de crear esta la estructura de trabajo es apoyar a los QA cuando empiecen a automatizar, permitiendo la creaciones de scripts para brindar soluciones.

## Framework Técnico

![Framework Tecnico](/images/overview/framework-tecnico.png)

1. Uso de **MAVEN** para las dependencias y librerías.
2. Uso de **PAGE OBJECT MODEL**, para la reutilización de componentes.
3. Uso de **CUCUMBER (Gherkin)** para la capa usuario y entender el proceso de automatización.
4. Uso del lenguaje de programación **JAVA** para la construcción de los scripts.
5. Uso de **KEYWORD DRIVEN**, para la asignación de diversas acciones dentro de la ejecución.
6. Uso de **EXCEL** para el manejo de los datos a nivel usuario ejecutor

## Tipos de Framework

1. **Data Driven:** Son aquellos en que los datos requeridos para la ejecución de las pruebas​.
2. **BDD:** Utilizan lenguaje natural, no técnico, para la especificación de las pruebas.​
3. **Keyword driven:** Identifican una serie de palabras clave y luego se asigna cada una de éstas a una serie de acciones​.
4. **Modular:** Esta separación nos permite una mejor mantenibilidad y actualización de las pruebas.​
5. **Híbrido:** Combinación de diversos frameworks para optimización.

## Diseño del Framework

![Diseño Framework](/images/overview/framework-diseno.png)

El framework se basa en el patrón de diseño Page Object Model o POM, pues permite mantener por separado los localizadores de los elementos Web, de los métodos de las pruebas. Adicional a ello, se ha implementado una clase Base, la cual contiene los métodos principales para la manipulación de los elementos Web con Selenium Web, como hacer un clic o escribir un texto. 

Así mismo, una de las librerías usadas en esta arquitectura es Cucumber, la cual, permite escribir los escenarios de pruebas con un lenguaje natural los cuales, serán almacenados en los archivos con la extensión “.feature” permitiendo a su vez la configuración y el desmontaje del entorno antes y después de cada escenario, mediante el desarrollo de Hooks.

Steps es el paquete que contiene las clases que implementan los pasos detallados en el archivo “.feature”. Los métodos de estas clases son las que interactúan con el navegador y hacen uso de otros métodos para la generación de reportes. 

La generación de reportes se realiza con las librerías Extend Report , para los reportes de html y Word respectivamente.


## Temas Investigados

- Cucumber
- BDD
- Modular
- TestNG
- JUnit
- Testing API
- Page Object Model
- Browser Driver
- Locator
- Data Driven Testing
- Keyword Drive
- Plugins
- Extent Reports
- Apache POI
- Http Client

## Requisitos Previos

Antes de utilizar este proyecto, solo necesita tener JDK 8 y Maven instalado en su computadora.

<https://maven.apache.org/download.cgi>

<https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html>

