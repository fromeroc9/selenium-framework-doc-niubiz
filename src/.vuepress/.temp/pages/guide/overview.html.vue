<template><div><h1 id="vision-general" tabindex="-1"><a class="header-anchor" href="#vision-general" aria-hidden="true">#</a> Visión General</h1>
<h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducción</h2>
<p>Este proyecto abarca a la utilización del framework Selenium para las pruebas de testing, creando producto util y usable para desarrollar diferentes tipos de pruebas.</p>
<p>Un framework de automatización nos permite tener un conjunto de pautas o reglas para la generación de casos de prueba y estandarizar la ejecución de pruebas tales como UI, API,entre otras.</p>
<p>El propósito de crear esta la estructura de trabajo es apoyar a los QA cuando empiecen a automatizar, permitiendo la creaciones de scripts para brindar soluciones.</p>
<h2 id="framework-tecnico" tabindex="-1"><a class="header-anchor" href="#framework-tecnico" aria-hidden="true">#</a> Framework Técnico</h2>
<p><img src="/images/overview/framework-tecnico.png" alt="Framework Tecnico"></p>
<ol>
<li>Uso de <strong>MAVEN</strong> para las dependencias y librerías.</li>
<li>Uso de <strong>PAGE OBJECT MODEL</strong>, para la reutilización de componentes.</li>
<li>Uso de <strong>CUCUMBER (Gherkin)</strong> para la capa usuario y entender el proceso de automatización.</li>
<li>Uso del lenguaje de programación <strong>JAVA</strong> para la construcción de los scripts.</li>
<li>Uso de <strong>KEYWORD DRIVEN</strong>, para la asignación de diversas acciones dentro de la ejecución.</li>
<li>Uso de <strong>EXCEL</strong> para el manejo de los datos a nivel usuario ejecutor</li>
</ol>
<h2 id="tipos-de-framework" tabindex="-1"><a class="header-anchor" href="#tipos-de-framework" aria-hidden="true">#</a> Tipos de Framework</h2>
<ol>
<li><strong>Data Driven:</strong> Son aquellos en que los datos requeridos para la ejecución de las pruebas​.</li>
<li><strong>BDD:</strong> Utilizan lenguaje natural, no técnico, para la especificación de las pruebas.​</li>
<li><strong>Keyword driven:</strong> Identifican una serie de palabras clave y luego se asigna cada una de éstas a una serie de acciones​.</li>
<li><strong>Modular:</strong> Esta separación nos permite una mejor mantenibilidad y actualización de las pruebas.​</li>
<li><strong>Híbrido:</strong> Combinación de diversos frameworks para optimización.</li>
</ol>
<h2 id="diseno-del-framework" tabindex="-1"><a class="header-anchor" href="#diseno-del-framework" aria-hidden="true">#</a> Diseño del Framework</h2>
<p><img src="/images/overview/framework-diseno.png" alt="Diseño Framework"></p>
<p>El framework se basa en el patrón de diseño Page Object Model o POM, pues permite mantener por separado los localizadores de los elementos Web, de los métodos de las pruebas. Adicional a ello, se ha implementado una clase Base, la cual contiene los métodos principales para la manipulación de los elementos Web con Selenium Web, como hacer un clic o escribir un texto.</p>
<p>Así mismo, una de las librerías usadas en esta arquitectura es Cucumber, la cual, permite escribir los escenarios de pruebas con un lenguaje natural los cuales, serán almacenados en los archivos con la extensión “.feature” permitiendo a su vez la configuración y el desmontaje del entorno antes y después de cada escenario, mediante el desarrollo de Hooks.</p>
<p>Steps es el paquete que contiene las clases que implementan los pasos detallados en el archivo “.feature”. Los métodos de estas clases son las que interactúan con el navegador y hacen uso de otros métodos para la generación de reportes.</p>
<p>La generación de reportes se realiza con las librerías Extend Report , para los reportes de html y Word respectivamente.</p>
<h2 id="temas-investigados" tabindex="-1"><a class="header-anchor" href="#temas-investigados" aria-hidden="true">#</a> Temas Investigados</h2>
<ul>
<li>Cucumber</li>
<li>BDD</li>
<li>Modular</li>
<li>TestNG</li>
<li>JUnit</li>
<li>Testing API</li>
<li>Page Object Model</li>
<li>Browser Driver</li>
<li>Locator</li>
<li>Data Driven Testing</li>
<li>Keyword Drive</li>
<li>Plugins</li>
<li>Extent Reports</li>
<li>Apache POI</li>
<li>Http Client</li>
</ul>
<h2 id="requisitos-previos" tabindex="-1"><a class="header-anchor" href="#requisitos-previos" aria-hidden="true">#</a> Requisitos Previos</h2>
<p>Antes de utilizar este proyecto, solo necesita tener JDK 8 y Maven instalado en su computadora.</p>
<p><a href="https://maven.apache.org/download.cgi" target="_blank" rel="noopener noreferrer">https://maven.apache.org/download.cgi<ExternalLinkIcon/></a></p>
<p><a href="https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html" target="_blank" rel="noopener noreferrer">https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html<ExternalLinkIcon/></a></p>
</div></template>
