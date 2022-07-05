<template><div><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm install @badeball/cypress-cucumber-preprocessor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<p><a href="https://docs.cypress.io/guides/references/configuration" target="_blank" rel="noopener noreferrer">Configure<ExternalLinkIcon/></a> <code v-pre>specPattern</code> with <code v-pre>&quot;**/*.feature&quot;</code>, using EG. <code v-pre>cypress.config.ts</code>.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"cypress"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">e2e</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">specPattern</span><span class="token operator">:</span> <span class="token string">"**/*.feature"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then configure your preferred bundler to process features files. See <a href="../examples">examples/</a> for how-to using Browserify, Esbuild or Webpack. Esbuild is the recommended bundler if you have no particular requirements (it's by far the fastest).</p>
<p>Read more about configuration options at <RouterLink to="/guide/cucumber/configuration.html">docs/configuration.md</RouterLink>.</p>
<h1 id="write-a-test" tabindex="-1"><a class="header-anchor" href="#write-a-test" aria-hidden="true">#</a> Write a test</h1>
<p>Write Gherkin documents and add a file for type definitions with a corresponding name (read more about how step definitions are resolved in <RouterLink to="/guide/cucumber/step-definitions.html">docs/step-definitions.md</RouterLink>). Reading <RouterLink to="/guide/cucumber/cucumber-basics.html">docs/cucumber-basics.md</RouterLink> is highly recommended.</p>
<div class="language-cucumber ext-cucumber line-numbers-mode"><pre v-pre class="language-cucumber"><code># cypress/e2e/duckduckgo.feature
Feature: duckduckgo.com
  Scenario: visting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// cypress/e2e/duckduckgo.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> When<span class="token punctuation">,</span> Then <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token function">When</span><span class="token punctuation">(</span><span class="token string">"I visit duckduckgo.com"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">"https://www.duckduckgo.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Then</span><span class="token punctuation">(</span><span class="token string">"I should see a search bar"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span>
    <span class="token string">"have.attr"</span><span class="token punctuation">,</span>
    <span class="token string">"placeholder"</span><span class="token punctuation">,</span>
    <span class="token string">"Search the web without being tracked"</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
