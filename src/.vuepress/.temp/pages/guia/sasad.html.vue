<template><div><h1 id="manual-de-uso" tabindex="-1"><a class="header-anchor" href="#manual-de-uso" aria-hidden="true">#</a> Manual de Uso</h1>
<h2 id="estructura" tabindex="-1"><a class="header-anchor" href="#estructura" aria-hidden="true">#</a> Estructura</h2>
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
