<template><div><h1 id="buntest-💣" tabindex="-1"><a class="header-anchor" href="#buntest-💣" aria-hidden="true">#</a> BunTest 💣</h1>
<p>Cuando se trata de guardar los tiempos de ejecución de los diferentes scenario solo nos conformamos con el reporte generado.</p>
<p>Vamos a utilizar la configuración de BunTest para guardar estos datos podemos apoyar con diferentes servicios Headless CMS o su propio desarrollo.</p>
<p>BunTest fue probado con Strapi, Supabe, PocketBase.</p>
<h2 id="requisitos" tabindex="-1"><a class="header-anchor" href="#requisitos" aria-hidden="true">#</a> Requisitos</h2>
<p>Deben descargar los siguiente archivos para el proyecto <code v-pre>web-automation-framework</code></p>
<p>BunTest.java, BunEnv.java, Hook.java</p>
<p><a href="https://fromeroc9.github.io/selenium-framework-doc-niubiz/compress/BunTest.zip" target="_blank" rel="noopener noreferrer">Descargar Archivos<ExternalLinkIcon/></a></p>
<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h2>
<p>Copiar los siguiente en los siguiente directorio.</p>
<ol>
<li>
<p>BunTest.java <code v-pre>com.niubiz.bot.frontend/utility</code></p>
</li>
<li>
<p>BunEnv.java <code v-pre>com.niubiz.bot.frontend/helpers</code></p>
</li>
<li>
<p>Hook.java <code v-pre>com.niubiz.bot.frontend/helpers</code> (Opcional)</p>
</li>
</ol>
<p>Si no desea modificar su Hook por defecto de proyecto reemplace los siguientes métodos;</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Debajo de "private static Screen screen" agregue</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> startTime<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> endTime<span class="token punctuation">;</span>

<span class="token comment">//Reemplace el método sceneario</span>
<span class="token annotation punctuation">@Before</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">scenario</span><span class="token punctuation">(</span><span class="token class-name">Scenario</span> scenario<span class="token punctuation">)</span><span class="token punctuation">{</span>
	startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">onTestStart</span><span class="token punctuation">(</span>scenario<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//Reemplace el método tearDown</span>
<span class="token annotation punctuation">@After</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token class-name">Scenario</span> scenario<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
	endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">onFinish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	generateWord<span class="token punctuation">.</span><span class="token function">endToWord</span><span class="token punctuation">(</span>scenario<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token class-name">BunTest</span> jkmm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BunTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	jkmm<span class="token punctuation">.</span><span class="token function">setScenario</span><span class="token punctuation">(</span>scenario<span class="token punctuation">)</span><span class="token punctuation">;</span>
	jkmm<span class="token punctuation">.</span><span class="token function">setDateInicio</span><span class="token punctuation">(</span>startTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
	jkmm<span class="token punctuation">.</span><span class="token function">setDateFin</span><span class="token punctuation">(</span>endTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
	jkmm<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name"><span class="token namespace">jkmm<span class="token punctuation">.</span></span>ExecutionResultTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="strapi" tabindex="-1"><a class="header-anchor" href="#strapi" aria-hidden="true">#</a> Strapi</h2>
<p>Si eres líder debes crear una tabla en strapi para guardar los datos de ejecución de los test y proporcionar al automatizador configurado el archivo BunEnv.java</p>
<p>Para más detalles sobre permiso o el uso de strapi ver el siguiente video <a href="https://youtu.be/h9vETeRiulY" target="_blank" rel="noopener noreferrer">Get started<ExternalLinkIcon/></a></p>
<p><strong>Ejemplo</strong></p>
<p>Strapi nos proporciona el backend en forma de api como se observa la imagen tenemos la tabla creada test que cuenta con 7 parametros obligatorio para el proyecto en selenium, cada uno puede poner los nombre similar o relacionado (feature, tags, sceneario, inicio, fin, duración, estado).</p>
<p><img src="/images/bun/1.png" alt="Strapi"></p>
<h3 id="bunenv" tabindex="-1"><a class="header-anchor" href="#bunenv" aria-hidden="true">#</a> BunEnv</h3>
<p>Como ya se tiene la tabla creada en strapi, con permiso de creación publico o autentificados.</p>
<p>Se necesita configurar las variables</p>
<p><strong>Configuración Strapi</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BunEnv</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token class-name">PowerBunTest</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>             <span class="token comment">//Encendido de BunTest por default false</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> env <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//CONFIG INICIAL</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"URL"</span><span class="token punctuation">,</span> <span class="token string">"https://&lt;HOST>:1337/api"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//Host de la api</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"TABLE"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                          <span class="token comment">//Nombre de la tabla creada</span>
        <span class="token comment">//CAMPOS TABLE</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_1"</span><span class="token punctuation">,</span> <span class="token string">"feature"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">//Los 7 parametros</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_2"</span><span class="token punctuation">,</span> <span class="token string">"scenario"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_3"</span><span class="token punctuation">,</span> <span class="token string">"tag"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_4"</span><span class="token punctuation">,</span> <span class="token string">"dateInicio"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_5"</span><span class="token punctuation">,</span> <span class="token string">"dateFin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_6"</span><span class="token punctuation">,</span> <span class="token string">"time"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_7"</span><span class="token punctuation">,</span> <span class="token string">"estado"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//CONFIG EXTRA</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"HEADER_COUNT"</span><span class="token punctuation">,</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">//Agregar la cantidad de header por default 0</span>
        env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"PARAM_BODY"</span><span class="token punctuation">,</span> <span class="token string">"data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//Exclusivo para Strapi</span>

        <span class="token keyword">return</span> env<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Si la api es autentificada agregar y modificar lo siguiente</span>
env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"HEADER_COUNT"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"HEADER_1"</span><span class="token punctuation">,</span> <span class="token string">"Authorization"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//El tipo de header agregado</span>
env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"HEADER_VAL_1"</span><span class="token punctuation">,</span> <span class="token string">"&lt;token>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//El valor del header agregado</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token comment">//Se puede agregar mas header si es necesario solo debe aumentar el header_count</span>
<span class="token comment">//y seguir el ejemplo</span>
env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"HEADER_&lt;num>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;header>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
env<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"HEADER_VAL_&lt;num>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;header value>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Como saber si mi configuración es correcto, BunTest nos mostrara un mensaje al ejecución. Las respuesta correcta que deberia obtener son las <strong>2xx</strong>, en caso de obtener una respuesta <strong>4xx</strong> o <strong>5xx</strong> la configuración realizada es incorrecta.</p>
<p><strong>Bun Configuración Correcta</strong></p>
<p><img src="/images/bun/3.png" alt="Bun Status Code"></p>
<p><img src="/images/bun/2.jpeg" alt="Http Status Code"></p>
<h2 id="ejecucion" tabindex="-1"><a class="header-anchor" href="#ejecucion" aria-hidden="true">#</a> Ejecución</h2>
<p>Si se desea ver los resultados de ejecución no olvidar de activar el BunTest en BunEnv</p>
<p>Para mayor presición de respuesta se recomienda ejecutar el RunTest del proyecto como buenas practicas. Como no recomendado se puede ejecutar desde los sceneario de los feature no garantizamos los tiempos exactos de la ejecución.</p>
<p><code v-pre>Nota</code> La duración de ejecución están en segundos</p>
<p><img src="/images/bun/4.png" alt="Strapi Result"></p>
</div></template>
