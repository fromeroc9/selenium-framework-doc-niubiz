<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<p>The preprocessor uses <a href="https://github.com/davidtheclark/cosmiconfig" target="_blank" rel="noopener noreferrer">cosmiconfig<ExternalLinkIcon/></a>, which means you can place configuration options in EG. <code v-pre>.cypress-cucumber-preprocessorrc.json</code> or <code v-pre>package.json</code>, with corresponding examples shown below.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// .cypress-cucumber-preprocessorrc.json
{
  "json": {
    "enabled": true
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// package.json
{
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "latest"
  },
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-overrides" tabindex="-1"><a class="header-anchor" href="#configuration-overrides" aria-hidden="true">#</a> Configuration overrides</h2>
<p>Configuration options can be overriden using (Cypress-) <a href="https://docs.cypress.io/guides/guides/environment-variables" target="_blank" rel="noopener noreferrer">environment variable<ExternalLinkIcon/></a>. The <code v-pre>filterSpecs</code> options (described in <RouterLink to="/cucumber/tags.html">docs/tags.md</RouterLink>) can for instance be overriden by running Cypress like shown below.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ cypress run -e filterSpecs=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Cypress environment variables can also be configured through ordinary environment variables, like shown below.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ CYPRESS_filterSpecs=true cypress run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Every configuration option has a similar key which can be use to override it, shown in the table below.</p>
<table>
<thead>
<tr>
<th>JSON path</th>
<th>Environment key</th>
<th>Example(s)</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>stepDefinitions</code></td>
<td><code v-pre>stepDefinitions</code></td>
<td><code v-pre>[filepath].{js,ts}</code></td>
</tr>
<tr>
<td><code v-pre>messages.enabled</code></td>
<td><code v-pre>messagesEnabled</code></td>
<td><code v-pre>true</code>, <code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>messages.output</code></td>
<td><code v-pre>messagesOutput</code></td>
<td><code v-pre>cucumber-messages.ndjson</code></td>
</tr>
<tr>
<td><code v-pre>json.enabled</code></td>
<td><code v-pre>jsonEnabled</code></td>
<td><code v-pre>true</code>, <code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>json.formatter</code></td>
<td><code v-pre>jsonFormatter</code></td>
<td><code v-pre>/usr/bin/cucumber-json-formatter</code></td>
</tr>
<tr>
<td><code v-pre>json.args     </code></td>
<td><code v-pre>jsonArgs     </code></td>
<td><code v-pre>[&quot;custom-json-formatter.js&quot;]</code></td>
</tr>
<tr>
<td><code v-pre>json.output</code></td>
<td><code v-pre>jsonOutput</code></td>
<td><code v-pre>cucumber-report.json</code></td>
</tr>
<tr>
<td><code v-pre>filterSpecs</code></td>
<td><code v-pre>filterSpecs</code></td>
<td><code v-pre>true</code>, <code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>omitFiltered</code></td>
<td><code v-pre>omitFiltered</code></td>
<td><code v-pre>true</code>, <code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="test-configuration" tabindex="-1"><a class="header-anchor" href="#test-configuration" aria-hidden="true">#</a> Test configuration</h2>
<p>Some of Cypress' <a href="https://docs.cypress.io/guides/references/configuration" target="_blank" rel="noopener noreferrer">configuration options<ExternalLinkIcon/></a> can be overridden per-test, see <RouterLink to="/cucumber/test-configuration.html">Test configuration</RouterLink>.</p>
</div></template>
