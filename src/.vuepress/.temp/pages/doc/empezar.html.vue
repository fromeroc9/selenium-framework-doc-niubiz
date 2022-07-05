<template><div><h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># clone project</span>
<span class="token function">git</span> clone https://github.com/example/cypress-e2e-framework
<span class="token comment"># access folder</span>
<span class="token builtin class-name">cd</span> cypress-e2e-framework
<span class="token comment"># install all dependencies from the root directory</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-gui" tabindex="-1"><a class="header-anchor" href="#ejecucion-gui" aria-hidden="true">#</a> Ejecución GUI</h2>
<p>Ejecución de pruebas a travez de una interfaz web</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># open Cypress App</span>
<span class="token function">npm</span> run cypress:open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-cli" tabindex="-1"><a class="header-anchor" href="#ejecucion-cli" aria-hidden="true">#</a> Ejecución CLI</h2>
<p>Igual que ejecutar cypress GUI pero con el comando cypress run (argumento CLI)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> cypress-e2e-framework
<span class="token comment"># run cypress tests headlessly</span>
<span class="token function">npm</span> run cypress:run

<span class="token comment"># similar a cypress run --browser &lt;name></span>
<span class="token function">npm</span> run cypress:run --browser chrome

<span class="token comment"># ejecución especifico de caso de prueba</span>
<span class="token function">npm</span> run cypress:run --env <span class="token assign-left variable">TAGS</span><span class="token operator">=</span><span class="token string">"@&lt;tag>"</span>

<span class="token comment"># generar reporter</span>
<span class="token function">npm</span> run report

<span class="token comment"># envio de reporte, video, fotos a cypress dashboard</span>
<span class="token function">npm</span> run cypress:run --record --key <span class="token operator">&lt;</span>abc<span class="token operator">></span>
<span class="token comment"># con paralelismo </span>
<span class="token function">npm</span> run cypress:run --record --key <span class="token operator">&lt;</span>abc<span class="token operator">></span> --parallel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-secuencial" tabindex="-1"><a class="header-anchor" href="#ejecucion-secuencial" aria-hidden="true">#</a> Ejecución Secuencial</h2>
<p>Igual que ejecutar cypress cli pero con el comando npm-run-all</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#configurado en el proyecto (ejecución de pruebas y generación de reporte)</span>
<span class="token function">npm</span> run secuencial

<span class="token comment">#secuencial</span>
npm-run-all -s cypress:run report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="estructura-de-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-de-proyecto" aria-hidden="true">#</a> Estructura de Proyecto</h2>
<p>La estructura de carpeta está inspirada al <code v-pre>web-automation-framework</code> de Selenium. Aquellos QA de Tsoft que vieron el framework de selenium podran ver las similudes.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>┌─ cypress
│  ├─ e2e
│  │  ├─ actions
|  |  |  └─ Actions.ts
│  |  ├─ collections
│  |  |  ├─ api
│  |  |  ├─ model
│  |  |  └─ request
|  |  ├─ helpers
|  |  |  └─ Hook.ts
|  |  ├─ locators 
|  |  ├─ pages
|  |  ├─ steps
|  |  └─ utility
│  |  |  ├─ ExcelUtils.ts
│  |  |  ├─ MultipleReports.ts
│  |  |  └─ SimpleReports.ts
│  ├─ resources
|  |  ├─ driver
│  |  |  ├─ linux
│  |  |  ├─ mac
│  |  |  └─ windows
|  |  |     └─ cucumber-json-formatter.exe
|  |  ├─ features
|  |  ├─ fixtures
│  |  |  ├─ data.json
│  |  |  └─ data.xlsx
|  |  └─ interfaces
│  |     └─ DataInterface.ts
│  ├─ support
│  └─ target
|     ├─ generate
|     ├─ reports
|     ├─ runner
|     ├─ screnshots
|     └─ video
├─ .npmrc
├─ cypress.config.ts
├─ package.json
└─ tsconfig.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h2>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>cypress</td>
<td>Carpeta principal del proyecto</td>
</tr>
<tr>
<td>.npmrc</td>
<td>Deshabilitar package-lock.json localmente</td>
</tr>
<tr>
<td>cypress.config.ts</td>
<td>Este archivo se utiliza para almacenar cualquier configuración específica de Cypress</td>
</tr>
<tr>
<td>package.json</td>
<td>Información importante sobre el proyecto así como metadatos funcionales (número de version, dependencias, etc.)</td>
</tr>
<tr>
<td>tsconfig.ts</td>
<td>Esto le permite escribir sus pruebas en TypeScript.</td>
</tr>
</tbody>
</table>
</div></template>
