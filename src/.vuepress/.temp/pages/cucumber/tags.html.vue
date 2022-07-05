<template><div><h1 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h1>
<p>Tests can be filtered using the (Cypress-) <a href="https://docs.cypress.io/guides/guides/environment-variables" target="_blank" rel="noopener noreferrer">environment variable<ExternalLinkIcon/></a> <code v-pre>tags</code> or <code v-pre>TAGS</code>. Note that the term &quot;environment variable&quot; here does <strong>not</strong> refer to OS-level environment variables.</p>
<p>A feature or scenario can have as many tags as you like, separated by spaces. Tags can be placed above the following Gherkin elements.</p>
<ul>
<li><code v-pre>Feature</code></li>
<li><code v-pre>scenario</code></li>
<li><code v-pre>Scenario Outline</code></li>
<li><code v-pre>Examples</code></li>
</ul>
<p>In <code v-pre>Scenario Outline</code>, you can use tags on different example like below.</p>
<div class="language-cucumber ext-cucumber line-numbers-mode"><pre v-pre class="language-cucumber"><code>Scenario Outline: Steps will run conditionally if tagged
  Given user is logged in
  When user clicks &lt;link&gt;
  Then user will be logged out

  @mobile
  Examples:
    | link                  |
    | logout link on mobile |

  @desktop
  Examples:
    | link                   |
    | logout link on desktop |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is not possible to place tags above <code v-pre>Background</code> or steps (<code v-pre>Given</code>, <code v-pre>When</code>, <code v-pre>Then</code>, <code v-pre>And</code> and <code v-pre>But</code>).</p>
<h2 id="tag-inheritance" tabindex="-1"><a class="header-anchor" href="#tag-inheritance" aria-hidden="true">#</a> Tag inheritance</h2>
<p>Tags are inherited by child elements. Tags that are placed above a <code v-pre>Feature</code> will be inherited by <code v-pre>Scenario</code>, <code v-pre>Scenario Outline</code>, or <code v-pre>Examples</code>. Tags that are placed above a <code v-pre>Scenario Outline</code> will be inherited by <code v-pre>Examples</code>.</p>
<h2 id="running-a-subset-of-scenarios" tabindex="-1"><a class="header-anchor" href="#running-a-subset-of-scenarios" aria-hidden="true">#</a> Running a subset of scenarios</h2>
<p>Normally when running a subset of scenarios using <code v-pre>cypress run --env tags=@foo</code>, you could potentially encounter files containing no matching scenarios. These can be pre-filtered away by setting <code v-pre>filterSpecs</code> to <code v-pre>true</code>, thus saving you execution time. This <strong>requires</strong> you to have registered this module in your <a href="https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Plugins-file" target="_blank" rel="noopener noreferrer">plugin file<ExternalLinkIcon/></a>, as shown below.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addCucumberPreprocessorPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>
  on<span class="token operator">:</span> Cypress<span class="token punctuation">.</span>PluginEvents<span class="token punctuation">,</span>
  config<span class="token operator">:</span> Cypress<span class="token punctuation">.</span>PluginConfigOptions
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Cypress<span class="token punctuation">.</span>PluginConfigOptions<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">addCucumberPreprocessorPlugin</span><span class="token punctuation">(</span>on<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Make sure to return the config object as it might have been modified by the plugin.</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="omit-filtered-tests" tabindex="-1"><a class="header-anchor" href="#omit-filtered-tests" aria-hidden="true">#</a> Omit filtered tests</h2>
<p>By default, all filtered tests are made <em>pending</em> using <code v-pre>it.skip</code> method. If you want to completely omit them, set <code v-pre>omitFiltered</code> to <code v-pre>true</code>.</p>
<h2 id="smart-tagging" tabindex="-1"><a class="header-anchor" href="#smart-tagging" aria-hidden="true">#</a> Smart tagging</h2>
<p>In the absence of a <code v-pre>tags</code> value and presence of a scenario with <code v-pre>@only</code>, only said scenario will run. You can in other words use this tag as you would use <code v-pre>.only()</code> in Mocha.</p>
<p>Similarly, scenarios tagged with <code v-pre>@skip</code> will always be skipped, despite being tagged with something else matching a tag filter.</p>
</div></template>
