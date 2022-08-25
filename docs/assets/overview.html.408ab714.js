import{_ as s,r as i,o as n,c as l,a as e,b as r,d as t,e as o}from"./app.a9f97fe8.js";var d="/selenium-framework-doc-niubiz/images/overview/framework-tecnico.png",c="/selenium-framework-doc-niubiz/images/overview/framework-diseno.png";const p={},u=t('<h1 id="vision-general" tabindex="-1"><a class="header-anchor" href="#vision-general" aria-hidden="true">#</a> Visi\xF3n General</h1><h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducci\xF3n</h2><p>Este proyecto abarca a la utilizaci\xF3n del framework Selenium para las pruebas de testing, creando producto util y usable para desarrollar diferentes tipos de pruebas.</p><p>Un framework de automatizaci\xF3n nos permite tener un conjunto de pautas o reglas para la generaci\xF3n de casos de prueba y estandarizar la ejecuci\xF3n de pruebas tales como UI, API,entre otras.</p><p>El prop\xF3sito de crear esta la estructura de trabajo es apoyar a los QA cuando empiecen a automatizar, permitiendo la creaciones de scripts para brindar soluciones.</p><h2 id="framework-tecnico" tabindex="-1"><a class="header-anchor" href="#framework-tecnico" aria-hidden="true">#</a> Framework T\xE9cnico</h2><p><img src="'+d+'" alt="Framework Tecnico"></p><ol><li>Uso de <strong>MAVEN</strong> para las dependencias y librer\xEDas.</li><li>Uso de <strong>PAGE OBJECT MODEL</strong>, para la reutilizaci\xF3n de componentes.</li><li>Uso de <strong>CUCUMBER (Gherkin)</strong> para la capa usuario y entender el proceso de automatizaci\xF3n.</li><li>Uso del lenguaje de programaci\xF3n <strong>JAVA</strong> para la construcci\xF3n de los scripts.</li><li>Uso de <strong>KEYWORD DRIVEN</strong>, para la asignaci\xF3n de diversas acciones dentro de la ejecuci\xF3n.</li><li>Uso de <strong>EXCEL</strong> para el manejo de los datos a nivel usuario ejecutor</li></ol><h2 id="tipos-de-framework" tabindex="-1"><a class="header-anchor" href="#tipos-de-framework" aria-hidden="true">#</a> Tipos de Framework</h2><ol><li><strong>Data Driven:</strong> Son aquellos en que los datos requeridos para la ejecuci\xF3n de las pruebas\u200B.</li><li><strong>BDD:</strong> Utilizan lenguaje natural, no t\xE9cnico, para la especificaci\xF3n de las pruebas.\u200B</li><li><strong>Keyword driven:</strong> Identifican una serie de palabras clave y luego se asigna cada una de \xE9stas a una serie de acciones\u200B.</li><li><strong>Modular:</strong> Esta separaci\xF3n nos permite una mejor mantenibilidad y actualizaci\xF3n de las pruebas.\u200B</li><li><strong>H\xEDbrido:</strong> Combinaci\xF3n de diversos frameworks para optimizaci\xF3n.</li></ol><h2 id="diseno-del-framework" tabindex="-1"><a class="header-anchor" href="#diseno-del-framework" aria-hidden="true">#</a> Dise\xF1o del Framework</h2><p><img src="'+c+'" alt="Dise\xF1o Framework"></p><p>El framework se basa en el patr\xF3n de dise\xF1o Page Object Model o POM, pues permite mantener por separado los localizadores de los elementos Web, de los m\xE9todos de las pruebas. Adicional a ello, se ha implementado una clase Base, la cual contiene los m\xE9todos principales para la manipulaci\xF3n de los elementos Web con Selenium Web, como hacer un clic o escribir un texto.</p><p>As\xED mismo, una de las librer\xEDas usadas en esta arquitectura es Cucumber, la cual, permite escribir los escenarios de pruebas con un lenguaje natural los cuales, ser\xE1n almacenados en los archivos con la extensi\xF3n \u201C.feature\u201D permitiendo a su vez la configuraci\xF3n y el desmontaje del entorno antes y despu\xE9s de cada escenario, mediante el desarrollo de Hooks.</p><p>Steps es el paquete que contiene las clases que implementan los pasos detallados en el archivo \u201C.feature\u201D. Los m\xE9todos de estas clases son las que interact\xFAan con el navegador y hacen uso de otros m\xE9todos para la generaci\xF3n de reportes.</p><p>La generaci\xF3n de reportes se realiza con las librer\xEDas Extend Report , para los reportes de html y Word respectivamente.</p><h2 id="temas-investigados" tabindex="-1"><a class="header-anchor" href="#temas-investigados" aria-hidden="true">#</a> Temas Investigados</h2><ul><li>Cucumber</li><li>BDD</li><li>Modular</li><li>TestNG</li><li>JUnit</li><li>Testing API</li><li>Page Object Model</li><li>Browser Driver</li><li>Locator</li><li>Data Driven Testing</li><li>Keyword Drive</li><li>Plugins</li><li>Extent Reports</li><li>Apache POI</li><li>Http Client</li></ul><h2 id="requisitos-previos" tabindex="-1"><a class="header-anchor" href="#requisitos-previos" aria-hidden="true">#</a> Requisitos Previos</h2><p>Antes de utilizar este proyecto, solo necesita tener JDK 8 y Maven instalado en su computadora.</p>',20),m={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},h=o("https://maven.apache.org/download.cgi"),g={href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"},v=o("https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html");function b(f,w){const a=i("ExternalLinkIcon");return n(),l("div",null,[u,e("p",null,[e("a",m,[h,r(a)])]),e("p",null,[e("a",g,[v,r(a)])])])}var k=s(p,[["render",b],["__file","overview.html.vue"]]);export{k as default};
