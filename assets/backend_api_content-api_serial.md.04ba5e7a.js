import{_ as s,o as n,c as a,e}from"./app.5c3bc3ea.js";const D=JSON.parse('{"title":"Content API. Serial","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"","slug":"","link":"#","children":[{"level":3,"title":"Serial response:","slug":"serial-response","link":"#serial-response","children":[]},{"level":3,"title":"Season response:","slug":"season-response","link":"#season-response","children":[]},{"level":3,"title":"Episode response:","slug":"episode-response","link":"#episode-response","children":[]}]}],"relativePath":"backend/api/content-api/serial.md"}'),l={name:"backend/api/content-api/serial.md"},p=e(`<h1 id="content-api-serial" tabindex="-1">Content API. Serial <a class="header-anchor" href="#content-api-serial" aria-hidden="true">#</a></h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h3 id="serial-response" tabindex="-1">Serial response: <a class="header-anchor" href="#serial-response" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  contentType: MediaContentType,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Content info fields</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title_en: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  description_en: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  year: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  release_date: Date,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age_limit: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  countries: Country[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  actors: Actor[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  directors: Director[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  genres: Genre[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  poster: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Rating fields</span></span>
<span class="line"><span style="color:#A6ACCD;">  imdb_rating: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  imdb_vote_count: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  kinopoisk_rating: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  kinopoisk_vote_count: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  seasons: Season[],</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="season-response" tabindex="-1">Season response: <a class="header-anchor" href="#season-response" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  contentType: MediaContentType,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Content info fields. Same as for serial</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title_en: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  poster: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Other fields are not required</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Rating fields. Same as for serial. Are not required</span></span>
<span class="line"><span style="color:#A6ACCD;">  ... </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  episodes: Episode[],</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="episode-response" tabindex="-1">Episode response: <a class="header-anchor" href="#episode-response" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  contentType: MediaContentType,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Content info fields. Same as for serial</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title_en: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Other fields are not required</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Rating fields. Same as for serial. Are not required</span></span>
<span class="line"><span style="color:#A6ACCD;">  ... </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Media source fields</span></span>
<span class="line"><span style="color:#A6ACCD;">  source: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  preview: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[p];function r(t,i,c,C,A,d){return n(),a("div",null,o)}const u=s(l,[["render",r]]);export{D as __pageData,u as default};
