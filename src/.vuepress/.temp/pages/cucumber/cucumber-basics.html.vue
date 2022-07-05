<template><div><h1 id="expressions" tabindex="-1"><a class="header-anchor" href="#expressions" aria-hidden="true">#</a> Expressions</h1>
<p>A step definition’s <em>expression</em> can either be a regular expression or a <a href="https://github.com/cucumber/cucumber-expressions#readme" target="_blank" rel="noopener noreferrer">cucumber expression<ExternalLinkIcon/></a>. The examples in this section use cucumber expressions. If you prefer to use regular expressions, each <em>capture group</em> from the match will be passed as arguments to the step definition’s function.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">Given</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">I have {int} cukes in my belly</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>cukes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h1>
<p>Steps can be accompanied by <a href="https://cucumber.io/docs/gherkin/reference/#doc-strings" target="_blank" rel="noopener noreferrer">doc strings<ExternalLinkIcon/></a> or <a href="https://cucumber.io/docs/gherkin/reference/#data-tables" target="_blank" rel="noopener noreferrer">data tables<ExternalLinkIcon/></a>, both which will be passed to the step definition as the last argument, as shown below.</p>
<div class="language-gherkin ext-gherkin line-numbers-mode"><pre v-pre class="language-gherkin"><code><span class="token feature"><span class="token keyword">Feature:</span><span class="token important"> a feature</span>
</span>  <span class="token scenario"><span class="token keyword">Scenario:</span><span class="token important"> a scenario</span></span>
    <span class="token atrule">Given</span> <span class="token atrule">a</span> table step<span class="token table-head">
      <span class="token punctuation">|</span><span class="token th variable"> Cucumber     </span><span class="token punctuation">|</span><span class="token th variable"> Cucumis sativus </span><span class="token punctuation">|</span></span><span class="token table-body">
      <span class="token punctuation">|</span><span class="token td string"> Burr Gherkin </span><span class="token punctuation">|</span><span class="token td string"> Cucumis anguria </span><span class="token punctuation">|</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Given<span class="token punctuation">,</span> DataTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token function">Given</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^a table step$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>table<span class="token operator">:</span> DataTable<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> expected <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">"Cucumber"</span><span class="token punctuation">,</span> <span class="token string">"Cucumis sativus"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">"Burr Gherkin"</span><span class="token punctuation">,</span> <span class="token string">"Cucumis anguria"</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  assert<span class="token punctuation">.</span><span class="token function">deepEqual</span><span class="token punctuation">(</span>table<span class="token punctuation">.</span><span class="token function">raw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> expected<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/data_table_interface.md" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> for <code v-pre>DataTable</code>'s interface.</p>
<h1 id="custom-parameter-types" tabindex="-1"><a class="header-anchor" href="#custom-parameter-types" aria-hidden="true">#</a> Custom parameter types</h1>
<p>Custom parameter types can be registered using <code v-pre>defineParameterType()</code>. They share the same scope as tests and you can invoke <code v-pre>defineParameterType()</code> anywhere you define steps, though the order of definition is unimportant. The table below explains the various arguments you can pass when defining a parameter type.</p>
<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>name</code></td>
<td>The name the parameter type will be recognised by in output parameters.</td>
</tr>
<tr>
<td><code v-pre>regexp</code></td>
<td>A regexp that will match the parameter. May include capture groups.</td>
</tr>
<tr>
<td><code v-pre>transformer</code></td>
<td>A function or method that transforms the match from the regexp. Must have arity 1 if the regexp doesn't have any capture groups. Otherwise the arity must match the number of capture groups in <code v-pre>regexp</code>.</td>
</tr>
</tbody>
</table>
<h1 id="pending-steps" tabindex="-1"><a class="header-anchor" href="#pending-steps" aria-hidden="true">#</a> Pending steps</h1>
<p>You can return <code v-pre>&quot;pending&quot;</code> from a step defintion or a chain to mark a step as pending. This will halt the execution and Cypress will report the test as &quot;skipped&quot;.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> When <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token function">When</span><span class="token punctuation">(</span><span class="token string">"a step"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"pending"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> When <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token function">When</span><span class="token punctuation">(</span><span class="token string">"a step"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cy<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"pending"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nested-steps" tabindex="-1"><a class="header-anchor" href="#nested-steps" aria-hidden="true">#</a> Nested steps</h1>
<p>You can invoke other steps from a step using <code v-pre>Step()</code>, as shown below.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> When<span class="token punctuation">,</span> Step <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token function">When</span><span class="token punctuation">(</span><span class="token string">"I fill in the entire form"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Step</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">'I fill in "john.doe" for "Username"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">Step</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">'I fill in "password" for "Password"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Step()</code> optionally accepts a <code v-pre>DataTable</code> or <code v-pre>string</code> argument.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  When<span class="token punctuation">,</span>
  Step<span class="token punctuation">,</span>
  DataTable
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token function">When</span><span class="token punctuation">(</span><span class="token string">"I fill in the entire form"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Step</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">,</span>
    <span class="token string">"I fill in the value"</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">DataTable</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">"Field"</span><span class="token punctuation">,</span> <span class="token string">"Value"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">"Username"</span><span class="token punctuation">,</span> <span class="token string">"john.doe"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">"Password"</span><span class="token punctuation">,</span> <span class="token string">"password"</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h1>
<p><code v-pre>Before()</code> and <code v-pre>After()</code> is similar to Cypress' <code v-pre>beforeEach()</code> and <code v-pre>afterEach()</code>, but they can be selected to conditionally run based on the tags of each scenario, as shown below. Furthermore, failure in these hooks does <strong>not</strong> result in remaining tests being skipped. This is contrary to Cypress' <code v-pre>beforeEach</code> and <code v-pre>afterEach</code>.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Before <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@badeball/cypress-cucumber-preprocessor"</span><span class="token punctuation">;</span>

<span class="token function">Before</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This hook will be executed before all scenarios.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Before</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tags<span class="token operator">:</span> <span class="token string">"@foo"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This hook will be executed before scenarios tagged with @foo.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Before</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tags<span class="token operator">:</span> <span class="token string">"@foo and @bar"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This hook will be executed before scenarios tagged with @foo and @bar.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Before</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tags<span class="token operator">:</span> <span class="token string">"@foo or @bar"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This hook will be executed before scenarios tagged with @foo or @bar.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
