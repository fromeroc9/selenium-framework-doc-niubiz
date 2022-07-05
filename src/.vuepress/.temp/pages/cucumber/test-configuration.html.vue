<template><div><h1 id="test-configuration" tabindex="-1"><a class="header-anchor" href="#test-configuration" aria-hidden="true">#</a> Test configuration</h1>
<p>Some of Cypress' <a href="https://docs.cypress.io/guides/references/configuration" target="_blank" rel="noopener noreferrer">configuration options<ExternalLinkIcon/></a> can be overridden per-test by leveraging tags. Below are all supported configuration options shown.</p>
<div class="language-gherkin ext-gherkin line-numbers-mode"><pre v-pre class="language-gherkin"><code><span class="token tag">@animationDistanceThreshold(5)</span>
<span class="token tag">@blockHosts('http://www.foo.com','http://www.bar.com')</span>
<span class="token tag">@defaultCommandTimeout(5)</span>
<span class="token tag">@execTimeout(5)</span>
<span class="token tag">@includeShadowDom(true)</span>
<span class="token tag">@includeShadowDom(false)</span>
<span class="token tag">@keystrokeDelay(5)</span>
<span class="token tag">@numTestsKeptInMemory(5)</span>
<span class="token tag">@pageLoadTimeout(5)</span>
<span class="token tag">@redirectionLimit(5)</span>
<span class="token tag">@requestTimeout(5)</span>
<span class="token tag">@responseTimeout(5)</span>
<span class="token tag">@retries(5)</span>
<span class="token tag">@retries(runMode=5)</span>
<span class="token tag">@retries(openMode=5)</span>
<span class="token tag">@retries(runMode=5,openMode=10)</span>
<span class="token tag">@retries(openMode=10,runMode=5)</span>
<span class="token tag">@screenshotOnRunFailure(true)</span>
<span class="token tag">@screenshotOnRunFailure(false)</span>
<span class="token tag">@scrollBehavior('center')</span>
<span class="token tag">@scrollBehavior('top')</span>
<span class="token tag">@scrollBehavior('bottom')</span>
<span class="token tag">@scrollBehavior('nearest')</span>
<span class="token tag">@slowTestThreshold(5)</span>
<span class="token tag">@viewportHeight(720)</span>
<span class="token tag">@viewportWidth(1280)</span>
<span class="token tag">@waitForAnimations(true)</span>
<span class="token tag">@waitForAnimations(false)</span>
<span class="token feature"><span class="token keyword">Feature:</span><span class="token important"> a feature</span>
</span>  <span class="token scenario"><span class="token keyword">Scenario:</span><span class="token important"> a scenario</span></span>
    <span class="token atrule">Given</span> <span class="token atrule">a</span> table step
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
