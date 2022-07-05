<template><div><h1 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h1>
<p><a href="https://github.com/badeball/cypress-cucumber-preprocessor/actions/workflows/build.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/badeball/cypress-cucumber-preprocessor/actions/workflows/build.yml/badge.svg" alt="Build status"><ExternalLinkIcon/></a>
<a href="https://npmjs.com/package/@badeball/cypress-cucumber-preprocessor" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dw/@badeball/cypress-cucumber-preprocessor" alt="Npm package weekly downloads"><ExternalLinkIcon/></a></p>
<p>This preprocessor aims to provide a developer experience and behavior similar to that of <a href="https://cucumber.io/" target="_blank" rel="noopener noreferrer">Cucumber<ExternalLinkIcon/></a>, to Cypress.</p>
<blockquote>
<p>ℹ️ The repositor has recently moved from <code v-pre>github.com/TheBrainFamily</code> to <code v-pre>github.com/badeball</code>. Read more about the transfer of ownership <a href="https://github.com/badeball/cypress-cucumber-preprocessor/issues/689" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
</blockquote>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm install @badeball/cypress-cucumber-preprocessor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>The preprocessor (with its dependencies) parses Gherkin documents and allows you to write tests as shown below.</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-guide" tabindex="-1"><a class="header-anchor" href="#user-guide" aria-hidden="true">#</a> User guide</h2>
<p>For further documentation see <RouterLink to="/guide/cucumber/docs/">docs</RouterLink> and <RouterLink to="/guide/cucumber/docs/quick-start.html">docs/quick-start.md</RouterLink>.</p>
<h2 id="contributing" tabindex="-1"><a class="header-anchor" href="#contributing" aria-hidden="true">#</a> Contributing</h2>
<p>See <RouterLink to="/guide/cucumber/CONTRIBUTING.html">CONTRIBUTING.md</RouterLink>.</p>
<h2 id="building" tabindex="-1"><a class="header-anchor" href="#building" aria-hidden="true">#</a> Building</h2>
<p>Building can be done once using:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or upon file changes with:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm run watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>There are multiple types of tests, all ran using npm scripts:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm run test:fmt
$ npm run test:types
$ npm run test:unit
$ npm run test:integration # make sure to build first
$ npm run test # runs all of the above
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="attribution" tabindex="-1"><a class="header-anchor" href="#attribution" aria-hidden="true">#</a> Attribution</h2>
<p>A special thanks goes out to <a href="https://github.com/lgandecki" target="_blank" rel="noopener noreferrer">Łukasz Gandecki<ExternalLinkIcon/></a> for developing and maintaning the cypress-cucumber integration before me, in addition to <a href="https://github.com/badeball/cypress-cucumber-preprocessor/graphs/contributors" target="_blank" rel="noopener noreferrer">all other contributors<ExternalLinkIcon/></a>. Some of the work has partially been sponsored by <a href="https://www.klavenessdigital.com/" target="_blank" rel="noopener noreferrer">Klaveness Digital<ExternalLinkIcon/></a>.</p>
</div></template>
