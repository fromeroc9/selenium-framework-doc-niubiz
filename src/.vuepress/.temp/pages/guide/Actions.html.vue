<template><div><h1 id="baseclass" tabindex="-1"><a class="header-anchor" href="#baseclass" aria-hidden="true">#</a> BaseClass</h1>
<p>Forma simplificada de selenium para realizar acciones como type, clear, click, select, value, sleep, read, write.</p>
<p><strong>Ubicación:</strong> <code v-pre>cypress/e2e/actions/Actions.ts</code></p>
<table>
<thead>
<tr>
<th>Opción</th>
<th>Default</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>typeText</td>
<td>WebDriver driver, By locator, String inputText</td>
<td>Permite ingresar texto exclusivo a input</td>
</tr>
<tr>
<td>click</td>
<td>WebDriver driver, By locator</td>
<td>Permite realizar click con cualquier elemento que se encuentre en el DOM</td>
</tr>
<tr>
<td>clear</td>
<td>WebDriver driver, By locator</td>
<td>Permite eliminar el texto a inputs</td>
</tr>
<tr>
<td>selectByVisibleText</td>
<td>locator: string, value: string, xpath: boolean</td>
<td>Permite captura el valor <code v-pre>option text</code></td>
</tr>
<tr>
<td>sleep</td>
<td>time : number</td>
<td>Permite realizar una pausa en la ejecución de la prueba <code v-pre>1000 = 1 seg</code></td>
</tr>
<tr>
<td>getValue</td>
<td>WebDriver driver, By locator</td>
<td>Permite obtener el valor del input</td>
</tr>
<tr>
<td>isDisplayed</td>
<td>WebDriver driver, By locator</td>
<td>Permite validar si un elemento es visible</td>
</tr>
<tr>
<td>scroll</td>
<td>WebDriver driver, int x, int y</td>
<td>Permite realizar moviento de pagina en pixeles</td>
</tr>
<tr>
<td>zoom</td>
<td>WebDriver driver, int size</td>
<td>Permite realizar acercamiento a la pagina de 0 al 100%</td>
</tr>
<tr>
<td>cargarBrowser</td>
<td>WebDriver driver, String url</td>
<td>Permite realizar la carga a la pagina a automatizar con su repectiva paso agregado al reporte</td>
</tr>
<tr>
<td>stepPass</td>
<td>WebDriver driver, String descripcion</td>
<td>Permite registrar el pase correcto al reporte</td>
</tr>
<tr>
<td>stepWarning</td>
<td>WebDriver driver, String descripcion</td>
<td>Permite registrar una alerta al reporte</td>
</tr>
<tr>
<td>stepFail</td>
<td>WebDriver driver, String descripcion</td>
<td>Permite registrar el pase incorrecto al reporte</td>
</tr>
</tbody>
</table>
<p>Todos los commads de selenium tienen una opciones que permiten cambiar el comportamiento predeterminado. Si desea crear su propio commads revise primero <a href="https://www.selenium.dev/documentation/webdriver/elements/interactions/" target="_blank" rel="noopener noreferrer">Interactions<ExternalLinkIcon/></a></p>
<p><em><strong>Ejemplo</strong></em> : Estructura de un BaseClass</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//No retorna nada</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">NAME_OPTION</span><span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">errorNoElementFound</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> locator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> we<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//string retorna valor booleano</span>
<span class="token keyword">protected</span> <span class="token class-name">Boolean</span> <span class="token function">NAME_OPTION</span><span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchElementException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        driver<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typetext" tabindex="-1"><a class="header-anchor" href="#typetext" aria-hidden="true">#</a> typeText</h2>
<p>Permite ingresar texto exclusivo a input</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">typeText</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">By</span> locator<span class="token punctuation">,</span> <span class="token class-name">String</span> inputText<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        driver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendKeys</span><span class="token punctuation">(</span>inputText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">errorNoElementFound</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> locator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> we<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Si es solo id, css selector, xpath, element html</span>
<span class="token function">typeText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"#input-password"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
<span class="token function">typeText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">".input-password"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
<span class="token function">typeText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"input[type='password']"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
<span class="token function">typeText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"//input[type='text']"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://www.selenium.dev/documentation/webdriver/elements/interactions/#send-keys" target="_blank" rel="noopener noreferrer">.sendKeys<ExternalLinkIcon/></a></p>
<h2 id="click" tabindex="-1"><a class="header-anchor" href="#click" aria-hidden="true">#</a> click</h2>
<p>Permite realizar click con cualquier elemento que se encuentre en el DOM</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">By</span> locator<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        driver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">errorNoElementFound</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> locator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> we<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Si es solo id, css selector, xpath, element html</span>
<span class="token function">click</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"#grabar"</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">".btn-submit"</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"input[type='submit']"</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"//[@id='Enviar']"</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"//button[text()='Validate']"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://www.selenium.dev/documentation/webdriver/elements/interactions/#click" target="_blank" rel="noopener noreferrer">.click<ExternalLinkIcon/></a></p>
<h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h2>
<p>Permite eliminar el texto a inputs</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">By</span> locator<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        driver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">errorNoElementFound</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> locator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> we<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Si es solo id, css selector, xpath, element html</span>
<span class="token function">clear</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"#input-password"</span><span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">".input-password"</span><span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"input[type='password']"</span><span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"//input[type='text']"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://www.selenium.dev/documentation/webdriver/elements/interactions/#clear" target="_blank" rel="noopener noreferrer">.clear<ExternalLinkIcon/></a></p>
<h2 id="selectbyvisibletext" tabindex="-1"><a class="header-anchor" href="#selectbyvisibletext" aria-hidden="true">#</a> selectByVisibleText</h2>
<p>Permite captura el valor <code v-pre>option text</code></p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">By</span> locator<span class="token punctuation">,</span> <span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">Select</span> typeSelect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Select</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        typeSelect<span class="token punctuation">.</span><span class="token function">selectByVisibleText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">errorNoElementFound</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> locator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> we<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Si es solo id, css selector, xpath, element html</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"#select-paises"</span><span class="token punctuation">,</span> <span class="token string">"Argentina"</span><span class="token punctuation">)</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">".select2"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"select"</span><span class="token punctuation">,</span> <span class="token string">"argentina"</span><span class="token punctuation">)</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"//select[@id='channel']"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://www.selenium.dev/documentation/webdriver/elements/select_lists/" target="_blank" rel="noopener noreferrer">Select<ExternalLinkIcon/></a></p>
<h2 id="sleep" tabindex="-1"><a class="header-anchor" href="#sleep" aria-hidden="true">#</a> sleep</h2>
<p>Permite realizar una pausa en la ejecución de la prueba <code v-pre>1000 = 1seg</code></p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">int</span> milisegundos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Sleeper</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>milisegundos<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getvalue" tabindex="-1"><a class="header-anchor" href="#getvalue" aria-hidden="true">#</a> getValue</h2>
<p>Permite obtener el valor del input</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">String</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">By</span> locator<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> driver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">errorNoElementFound</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> locator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> we<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//obtener valor de usuario y contraseña</span>
<span class="token class-name">String</span> <span class="token class-name">Usermane</span> <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> '#username'<span class="token punctuation">)</span>
<span class="token comment">// Output Jhoe Example</span>
<span class="token class-name">String</span> <span class="token class-name">Usermane</span> <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"//input[@id='username']"</span><span class="token punctuation">)</span>
<span class="token comment">// Output Jhoe Example</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isdisplayed" tabindex="-1"><a class="header-anchor" href="#isdisplayed" aria-hidden="true">#</a> isDisplayed</h2>
<p>Permite validar si un elemento es visible</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Boolean</span> <span class="token function">isDisplayed</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">By</span> locator<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> driver<span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDisplayed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchElementException</span> we<span class="token punctuation">)</span><span class="token punctuation">{</span>
        driver<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> viewUser <span class="token operator">=</span> <span class="token function">isDisplayed</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> '#username'<span class="token punctuation">)</span>
<span class="token comment">// Output true or false Example</span>
<span class="token class-name">String</span> viewUser <span class="token operator">=</span> <span class="token function">isDisplayed</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"//input[@id='username']"</span><span class="token punctuation">)</span>
<span class="token comment">// Output false or true Example</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> scroll</h2>
<p>Permite realizar moviento de pagina en pixeles</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">scroll</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">JavascriptExecutor</span> js <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">JavascriptExecutor</span><span class="token punctuation">)</span> driver<span class="token punctuation">;</span>
        js<span class="token punctuation">.</span><span class="token function">executeScript</span><span class="token punctuation">(</span><span class="token string">"window.scrollBy("</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">")"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"[LOG]-Scroll: "</span> <span class="token operator">+</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Mover 150px horizontal a la pagina</span>
<span class="token function">scroll</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> zoom</h2>
<p>Permite realizar acercamiento a la pagina de 0 al 100%</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">zoom</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">JavascriptExecutor</span> js <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">JavascriptExecutor</span><span class="token punctuation">)</span> driver<span class="token punctuation">;</span>
        js<span class="token punctuation">.</span><span class="token function">executeScript</span><span class="token punctuation">(</span><span class="token string">"document.body.style.zoom = '"</span> <span class="token operator">+</span> size <span class="token operator">+</span> <span class="token string">"%'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"[LOG]-zoom: "</span> <span class="token operator">+</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Zoom de 90% a una pagina</span>
<span class="token function">zoom</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cargarbrowser" tabindex="-1"><a class="header-anchor" href="#cargarbrowser" aria-hidden="true">#</a> cargarBrowser</h2>
<p>Permite realizar la carga a la pagina a automatizar con su repectiva paso agregado al reporte</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cargarBrowser</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">String</span> url<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            driver<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">stepPass</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"Cargo correctamente la URL: '"</span><span class="token operator">+</span>url<span class="token operator">+</span><span class="token string">"'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            generateWord<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">"Cargo correctamente la URL: '"</span><span class="token operator">+</span>url<span class="token operator">+</span><span class="token string">"'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            generateWord<span class="token punctuation">.</span><span class="token function">sendBreak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">"Error al cargar la página, NO existe el parámetro URL del aplicativo "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token class-name">NoSuchWindowException</span> <span class="token operator">|</span> <span class="token class-name">NoSuchSessionException</span> e <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">stepFailNoShoot</span><span class="token punctuation">(</span><span class="token string">"[Error al cargar Browser] : Navegador se cerro inesperandamente : "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        generateWord<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">"[Error al cargar Browser] : Navegador se cerro inesperandamente : "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        driver<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token class-name">Throwable</span> t <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">stepFail</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"[Error al cargar Browser] : "</span> <span class="token operator">+</span> t<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        generateWord<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">"[Error al cargar Browser] : "</span> <span class="token operator">+</span> t<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        generateWord<span class="token punctuation">.</span><span class="token function">addImageToWord</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        driver<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//Cargar pagina xy y agrega paso al reporte</span>
<span class="token function">cargarBrowser</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"https://example.com.pe"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="steppass" tabindex="-1"><a class="header-anchor" href="#steppass" aria-hidden="true">#</a> stepPass</h2>
<p>Permite registrar el pase correcto al reporte</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">stepPass</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">String</span> descripcion<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExtentReportUtil</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">.</span><span class="token function">stepPass</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> descripcion<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"[LOG]-StepPass: "</span> <span class="token operator">+</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"[LOG]-StepPass: "</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">stepPass</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"Paso 1 finalizado correctamente"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="stepwarning" tabindex="-1"><a class="header-anchor" href="#stepwarning" aria-hidden="true">#</a> stepWarning</h2>
<p>Permite registrar una alerta al reporte</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">stepWarning</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">String</span> descripcion<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExtentReportUtil</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">.</span><span class="token function">stepWarning</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> descripcion<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"[LOG]-StepWarning: "</span> <span class="token operator">+</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">stepWarning</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"Paso 2 finalizado observado"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="stepfail" tabindex="-1"><a class="header-anchor" href="#stepfail" aria-hidden="true">#</a> stepFail</h2>
<p>Permite registrar el pase incorrecto al reporte</p>
<p><strong>Sintaxis</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">stepFail</span><span class="token punctuation">(</span><span class="token class-name">WebDriver</span> driver<span class="token punctuation">,</span> <span class="token class-name">String</span> descripcion<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExtentReportUtil</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">.</span><span class="token function">stepFail</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> descripcion<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"[LOG]-StepFail: "</span> <span class="token operator">+</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">stepFail</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">"Paso 3 finalizado con errores"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
