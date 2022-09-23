import{_ as e,o as n,c as o,e as s}from"./app.0e2ef8d6.js";const _=JSON.parse('{"title":"Content API. Content types","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Types of media content:","slug":"types-of-media-content","link":"#types-of-media-content","children":[{"level":3,"title":"Code:","slug":"code","link":"#code","children":[]}]}],"relativePath":"backend/api/content-api/content-types.md"}'),t={name:"backend/api/content-api/content-types.md"},a=s(`<h1 id="content-api-content-types" tabindex="-1">Content API. Content types <a class="header-anchor" href="#content-api-content-types" aria-hidden="true">#</a></h1><h2 id="types-of-media-content" tabindex="-1">Types of media content: <a class="header-anchor" href="#types-of-media-content" aria-hidden="true">#</a></h2><ul><li><code>Movie</code> - content consisting of a single video file with a duration of <strong>~5 minutes or more</strong>.</li><li><code>Serial</code> - content consisting of one or more seasons. <strong>Does not have a video source</strong>.</li><li><code>Season</code> - content consisting of one or more episodes. <strong>Does not have a video source</strong>.</li><li><code>Episode</code> - content consisting of a single video file with a duration of <strong>~5 min or more</strong>. It is part of the <code>season</code>.</li><li><code>Moment</code> - content representing a clipping from a <code>movie</code> or <code>episode</code> and consisting of a single video file lasting from <strong>a few seconds to ~5 minutes</strong>. Can be created by the user.</li></ul><h3 id="code" tabindex="-1">Code: <a class="header-anchor" href="#code" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">enum MediaContentType {</span></span>
<span class="line"><span style="color:#A6ACCD;">  MOVIE,</span></span>
<span class="line"><span style="color:#A6ACCD;">  SERIAL,</span></span>
<span class="line"><span style="color:#A6ACCD;">  SEASON,</span></span>
<span class="line"><span style="color:#A6ACCD;">  EPISODE&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  MOMENT</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),c=[a];function i(l,d,r,p,h,f){return n(),o("div",null,c)}const m=e(t,[["render",i]]);export{_ as __pageData,m as default};
