import{_ as e,o as a,c as n,d as s}from"./app.7c7b3cea.js";var i="/selenium-framework-doc-niubiz/images/ejecucion/gui.png";const r={},t=s(`<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalaci\xF3n</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># clone project</span>
<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">=</span> Usuario que tenga acceso al repositorio 

<span class="token function">git</span> clone https://<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@bitbucket.org/VisaNet_TI/framework-selenium.git
<span class="token comment"># access folder</span>
<span class="token builtin class-name">cd</span> framework-selenium
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-gui" tabindex="-1"><a class="header-anchor" href="#ejecucion-gui" aria-hidden="true">#</a> Ejecuci\xF3n GUI</h2><p>Ejecuci\xF3n de pruebas a travez de una interfaz web.</p><p>Podemos ejecuctar los diferentes escenario por separado o inicializar todo el feature para su ejecuci\xF3n.</p><p><img src="`+i+`" alt="Ejecuci\xF3n"></p><h2 id="ejecucion-cli" tabindex="-1"><a class="header-anchor" href="#ejecucion-cli" aria-hidden="true">#</a> Ejecuci\xF3n CLI</h2><p>Similar que ejecutar selenium por GUI pero con comando en la terminal favorita</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> framework-selenium

<span class="token comment"># To run scenarios with @debug1 and @debug2:</span>
<span class="token comment"># Old version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dcucumber.options=--tags @debug1 --tags @debug2&quot;</span>

<span class="token comment"># Actual version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dcucumber.options=--tags &#39;@debug1 and @debug2&#39;&quot;</span>

<span class="token comment"># To run scenarios with @debug1 or @debug2:</span>
<span class="token comment">#Old version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dcucumber.options=--tags @debug1, @debug2&quot;</span>

<span class="token comment">#Actual version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dcucumber.options=--tags &#39;@debug1 or @debug2&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="estructura-de-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-de-proyecto" aria-hidden="true">#</a> Estructura de Proyecto</h2><p>Estructura de carpeta del framework trabajado.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u250C\u2500 src
|  \u2514\u2500 main
|     \u251C\u2500 java
|     |  \u2514\u2500 frontend
|     |     \u251C\u2500 base
\u2502     |     |  \u2514\u2500 BaseClass.java
|     |     \u251C\u2500 collections
\u2502     |     |  \u251C\u2500 api
\u2502     |     |  \u251C\u2500 model
\u2502     |     |  \u2514\u2500 request
|     |     \u251C\u2500 helpers
|     |     |  \u2514\u2500 Hook.java
|     |     \u251C\u2500 listener
|     |     |  \u2514\u2500 Listener.java
|     |     \u251C\u2500 pages
|     |     |  \u251C\u2500 objects
|     |     |  \u2514\u2500 pages 
|     |     \u251C\u2500 runner
|     |     |  \u2514\u2500 Run Test.java
|     |     \u251C\u2500 steps
|     |     \u2514\u2500 utility
|     |        \u251C\u2500 ExcelReader.java
|     |        \u251C\u2500 ExtentReportUtil.java
|     |        \u251C\u2500 FileHelper.java
|     |        \u251C\u2500 GenerateWord.java
|     |        \u251C\u2500 Sleeper.java
|     |        \u2514\u2500 StringHelper.java
|     \u2514\u2500 resources
|        \u251C\u2500 config
|        |  \u251C\u2500 extent-config.xml
|        |  \u2514\u2500 testng.xml 
|        \u251C\u2500 driver
|        |  \u251C\u2500 chrome
|        |  |  \u2514\u2500 chromedriver.exe
|        |  \u251C\u2500 firefox
|        |  \u2514\u2500 ie
|        \u251C\u2500 excel
|        |  \u2514\u2500 data.xlsx
|        \u251C\u2500 features
|        \u251C\u2500 template
|        \u2514\u2500 log.properties      
\u2514\u2500 target
   \u251C\u2500 classes
   \u251C\u2500 generated-sources
   \u2514\u2500 resultado
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>src/main</td><td>Carpeta principal del proyecto</td></tr><tr><td>target</td><td>Carpeta donde se genera los reportes html, documento de word</td></tr></tbody></table><h4 id="java-frontend" tabindex="-1"><a class="header-anchor" href="#java-frontend" aria-hidden="true">#</a> Java/Frontend</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>base</td><td>Especializado para guardar acciones, el automatizador puede crear nuevas acciones de la API de Selenium</td></tr><tr><td>collections</td><td>Carpeta especializada para las pruebas de API</td></tr><tr><td>helpers</td><td>Especializado para la configuraci\xF3n del driver <code>browser</code> a utilizar en las pruebas</td></tr><tr><td>listener</td><td>Almacena las configuraciones antes, durante y despues de la ejecuci\xF3n de las pruebas</td></tr><tr><td>pages</td><td>Especializado para contener funcionalidad de los steps a desarrollar</td></tr><tr><td>steps</td><td>Especializado para almacenar los pasos a desarrollar del feature a nivel funcional</td></tr><tr><td>runner</td><td>Especializado para la configuraci\xF3n de los casos a ejecutar</td></tr><tr><td>utily</td><td>Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creaci\xF3n de reportes, etc.</td></tr></tbody></table><h4 id="java-resource" tabindex="-1"><a class="header-anchor" href="#java-resource" aria-hidden="true">#</a> Java/Resource</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>config</td><td>Configuraciones especiales del testng y extent report</td></tr><tr><td>driver</td><td>Especializado para almacenar los diferentes controladores por navegador</td></tr><tr><td>excel</td><td>Especializado para almacer los archivos excel</td></tr><tr><td>feature</td><td>Especializado para la creaci\xF3n de <code>.feture</code> (escenarios en Gherkin)</td></tr><tr><td>template</td><td>Configuraciones de plantilla para la generaci\xF3n del Word</td></tr><tr><td>log.properties</td><td>Configuraciones de log4j</td></tr></tbody></table><h4 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>classes</td><td>Genera la previa configuraci\xF3n del proyecto</td></tr><tr><td>generated-sources</td><td>Genera diferentes anotaciones</td></tr><tr><td>resultado</td><td>Almacena las capturas de pantalla y genera el reporte html y los documento word</td></tr></tbody></table>`,20),d=[t];function l(c,o){return a(),n("div",null,d)}var v=e(r,[["render",l],["__file","empezar.html.vue"]]);export{v as default};
