<template><div><h1 id="step-definitions" tabindex="-1"><a class="header-anchor" href="#step-definitions" aria-hidden="true">#</a> Step definitions</h1>
<p>Step definitions are resolved using search paths that are configurable through the <code v-pre>stepDefinitions</code> property. The preprocessor uses <a href="https://github.com/davidtheclark/cosmiconfig" target="_blank" rel="noopener noreferrer">cosmiconfig<ExternalLinkIcon/></a>, which means you can place configuration options in EG. <code v-pre>.cypress-cucumber-preprocessorrc.json</code> or <code v-pre>package.json</code>. The default search paths are shown below.</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"stepDefinitions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"[filepath]/**/*.{js,ts}"</span><span class="token punctuation">,</span>
    <span class="token string">"[filepath].{js,ts}"</span><span class="token punctuation">,</span>
    <span class="token string">"cypress/support/step_definitions/**/*.{js,ts}"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This means that if you have a file <code v-pre>cypress/e2e/duckduckgo.feature</code>, it will match step definitions found in</p>
<ul>
<li><code v-pre>cypress/e2e/duckduckgo/steps.ts</code></li>
<li><code v-pre>cypress/e2e/duckduckgo.ts</code></li>
<li><code v-pre>cypress/support/step_definitions/duckduckgo.ts</code></li>
</ul>
<h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>
<p>There's also a <code v-pre>[filepart]</code> option available. Given a configuration shown below</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"stepDefinitions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"[filepart]/step_definitions/**/*.{js,ts}"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>... and a feature file <code v-pre>cypress/e2e/foo/bar/baz.feature</code>, the preprocessor would look for step definitions in</p>
<ul>
<li><code v-pre>cypress/e2e/foo/bar/baz/step_definitions/**/*.{js,ts}</code></li>
<li><code v-pre>cypress/e2e/foo/bar/step_definitions/**/*.{js,ts}</code></li>
<li><code v-pre>cypress/e2e/foo/step_definitions/**/*.{js,ts}</code></li>
<li><code v-pre>cypress/e2e/step_definitions/**/*.{js,ts}</code></li>
</ul>
</div></template>
