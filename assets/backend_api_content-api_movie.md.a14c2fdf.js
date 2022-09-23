import{_ as s,o as n,c as a,e}from"./app.14e86584.js";const y=JSON.parse('{"title":"Content API. Movie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Response:","slug":"response","link":"#response","children":[]}],"relativePath":"backend/api/content-api/movie.md"}'),p={name:"backend/api/content-api/movie.md"},l=e(`<h1 id="content-api-movie" tabindex="-1">Content API. Movie <a class="header-anchor" href="#content-api-movie" aria-hidden="true">#</a></h1><h2 id="response" tabindex="-1">Response: <a class="header-anchor" href="#response" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  // Media source fields</span></span>
<span class="line"><span style="color:#A6ACCD;">  source: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  preview: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[l];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{y as __pageData,D as default};
