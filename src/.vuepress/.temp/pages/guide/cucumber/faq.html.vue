<template><div><h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently asked questions</h1>
<h3 id="env-tags-isn-t-picked-up" tabindex="-1"><a class="header-anchor" href="#env-tags-isn-t-picked-up" aria-hidden="true">#</a> <code v-pre>--env</code> / <code v-pre>tags</code> isn't picked up</h3>
<p>This might be because you're trying to specify <code v-pre>-e / --env</code> multiple times, but <a href="https://docs.cypress.io/guides/guides/command-line#cypress-run-env-lt-env-gt" target="_blank" rel="noopener noreferrer">multiple values should be comma-separated<ExternalLinkIcon/></a>.</p>
<hr>
<h3 id="i-get-fs-1-promises-rm-is-not-a-function" tabindex="-1"><a class="header-anchor" href="#i-get-fs-1-promises-rm-is-not-a-function" aria-hidden="true">#</a> I get <code v-pre>fs_1.promises.rm is not a function</code></h3>
<p>Upgrade your node version to at least <a href="https://nodejs.org/api/fs.html#fspromisesrmpath-options" target="_blank" rel="noopener noreferrer">v14.14.0<ExternalLinkIcon/></a>.</p>
<hr>
<h3 id="i-get-spawn-cucumber-json-formatter-enoent" tabindex="-1"><a class="header-anchor" href="#i-get-spawn-cucumber-json-formatter-enoent" aria-hidden="true">#</a> I get <code v-pre>spawn cucumber-json-formatter ENOENT</code></h3>
<p>You need to install <code v-pre>cucumber-json-formatter</code> <strong>yourself</strong>, as per <RouterLink to="/guide/cucumber/json-report.html">documentation</RouterLink>.</p>
</div></template>
