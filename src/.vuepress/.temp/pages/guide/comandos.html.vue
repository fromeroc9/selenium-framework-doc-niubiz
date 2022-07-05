<template><div><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h2>
<p>Forma simplificada de cypress para realizar acciones como type, clear, click, select, value, wait, read, write, frame.</p>
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
<td>locator: string, value: string, xpath: boolean</td>
<td>Permite ingresar texto exclusivo a input</td>
</tr>
<tr>
<td>click</td>
<td>locator: string, xpath: boolean</td>
<td>Permite realizar click con cualquier elemento que se encuentre en el DOM</td>
</tr>
<tr>
<td>clear</td>
<td>locator: string, xpath: boolean</td>
<td>Permite eliminar el texto a inputs</td>
</tr>
<tr>
<td>selectByVisibleText</td>
<td>locator: string, value: string, xpath: boolean</td>
<td>Permite captura el valor <code v-pre>option value</code> o <code v-pre>option text</code></td>
</tr>
<tr>
<td>wait</td>
<td>time : number</td>
<td>Permite realizar una pausa en la ejecución de la prueba <code v-pre>1000 = 1 seg</code></td>
</tr>
<tr>
<td>getValue</td>
<td>locator: string, xpath: boolean</td>
<td>Permite obtener el valor del input <code v-pre>experimental</code></td>
</tr>
<tr>
<td>getText</td>
<td>locator: string, xpath: boolean</td>
<td>Permite obtener el valor texto de cualquier elemento en el DOM <code v-pre>experimental</code></td>
</tr>
<tr>
<td>xframe</td>
<td>locator: string, position: number</td>
<td>Permite buscar el frame orden en el DOM valor por defecto 0</td>
</tr>
<tr>
<td>itypeText</td>
<td>framelocator : string, locator: string, value: string, xpath: boolean</td>
<td>Permite ingresar texto exclusivo a input del frame</td>
</tr>
<tr>
<td>iclick</td>
<td>framelocator : string, locator: string, xpath: boolean</td>
<td>Permite realizar click con cualquier elemento que se encuentre en el frame</td>
</tr>
<tr>
<td>iclear</td>
<td>framelocator : string, locator: string, xpath: boolean</td>
<td>Permite eliminar el texto a inputs del frame</td>
</tr>
<tr>
<td>ExcelReader</td>
<td>file; string, sheet: string, jsonName?:string</td>
<td>Permite leer archivos excel con formato xlsx</td>
</tr>
<tr>
<td>JSONReader</td>
<td>file: string</td>
<td>Permite leer archivos json</td>
</tr>
<tr>
<td>JSONWrite</td>
<td>filename: string, data: any</td>
<td>Permite crear archivo json</td>
</tr>
</tbody>
</table>
<p>Todos los commads de cypress tienen una opciones que permiten cambiar el comportamiento predeterminado. Si desea crear una acción nueva por favor revise en  : <a href="https://docs.cypress.io/api/table-of-contents" target="_blank" rel="noopener noreferrer">API Commands<ExternalLinkIcon/></a></p>
<p><em><strong>Ejemplo</strong></em> : Estructura de la función</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//void no retorna nada</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NAME_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//string retorna valor texto</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NAME_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//number retorna valor numerico</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NAME_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">//puede crear su tipo de dato a retornar con interfaces</span>
<span class="token comment">//Otros tipo de retornos Interface, Object, Promise, Array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typetext" tabindex="-1"><a class="header-anchor" href="#typetext" aria-hidden="true">#</a> typeText</h2>
<p>Permite ingresar texto exclusivo a input</p>
<p><strong>Sintaxis</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">typeText</span> <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">"#input-password"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">".input-password"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">"input[type='password']"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">)</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">"//input[type='text']"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://docs.cypress.io/api/commands/type" target="_blank" rel="noopener noreferrer">.type(text), .type(text, options)<ExternalLinkIcon/></a></p>
<h2 id="click" tabindex="-1"><a class="header-anchor" href="#click" aria-hidden="true">#</a> click</h2>
<p>Permite realizar click con cualquier elemento que se encuentre en el DOM</p>
<p><strong>Sintaxis</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> click <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">"#grabar"</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">".btn-submit"</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">"input[type='submit']"</span><span class="token punctuation">)</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">"//[@id='Enviar']"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">"//button[text()='Validate']"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://docs.cypress.io/api/commands/click" target="_blank" rel="noopener noreferrer">.click(position), .click(position, options)<ExternalLinkIcon/></a></p>
<h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h2>
<p>Permite eliminar el texto a inputs</p>
<p><strong>Sintaxis</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> clear <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">"#input-password"</span><span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">".input-password"</span><span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">"input[type='password']"</span><span class="token punctuation">)</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">"//input[type='text']"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://docs.cypress.io/api/commands/clear" target="_blank" rel="noopener noreferrer">.clear(), .clear(options)<ExternalLinkIcon/></a></p>
<h2 id="selectbyvisibletext" tabindex="-1"><a class="header-anchor" href="#selectbyvisibletext" aria-hidden="true">#</a> selectByVisibleText</h2>
<p>Permite captura el valor <code v-pre>option value</code> o <code v-pre>option text</code></p>
<p><strong>Sintaxis</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> selectByVisibleText <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">"#select-paises"</span><span class="token punctuation">,</span> <span class="token string">"Argentina"</span><span class="token punctuation">)</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">".select2"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">"select"</span><span class="token punctuation">,</span> <span class="token string">"argentina"</span><span class="token punctuation">)</span>
<span class="token comment">//*[@id="channel"]</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">"//select[@id='channel']"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://docs.cypress.io/api/commands/select" target="_blank" rel="noopener noreferrer">.select(values), .select(values,options)<ExternalLinkIcon/></a></p>
<h2 id="wait" tabindex="-1"><a class="header-anchor" href="#wait" aria-hidden="true">#</a> wait</h2>
<p>Permite realizar una pausa en la ejecución de la prueba <code v-pre>1000 = 1seg</code></p>
<p><strong>Sintaxis</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> wait <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">wait</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Construido con <a href="https://docs.cypress.io/api/commands/wait" target="_blank" rel="noopener noreferrer">.wait(time), .wait(alias)<ExternalLinkIcon/></a></p>
<h2 id="xframe" tabindex="-1"><a class="header-anchor" href="#xframe" aria-hidden="true">#</a> xframe</h2>
<p>Permite buscar el frame orden en el DOM valor por defecto 0</p>
<p><strong>Sintaxis</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">xframe</span> <span class="token operator">=</span> <span class="token punctuation">(</span>locator <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> position<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cy
    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'iframe'</span><span class="token operator">+</span>locator<span class="token punctuation">,</span> <span class="token punctuation">{</span> log<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">its</span><span class="token punctuation">(</span>position <span class="token operator">+</span> <span class="token string">'.contentDocument.body'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> log<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span> <span class="token operator">=></span> cy<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span> log<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Construido con <a href="https://docs.cypress.io/api/commands/its" target="_blank" rel="noopener noreferrer">.its(time), .its(propertyName)<ExternalLinkIcon/></a></p>
</div></template>
