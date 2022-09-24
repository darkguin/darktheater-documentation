import{_ as t,o as e,c as l,e as s}from"./app.5c3bc3ea.js";const x=JSON.parse('{"title":"Content API. Movie","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"backend/api/content-api/movie.md"}'),n={name:"backend/api/content-api/movie.md"},a=s(`<h1 id="content-api-movie" tabindex="-1">Content API. Movie <a class="header-anchor" href="#content-api-movie" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Field name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">The unique ID of the movie</td></tr><tr><td style="text-align:left;"><code>contentType</code></td><td style="text-align:left;">MediaContentType<b style="color:red;">*</b></td><td style="text-align:left;">Type of the content. (<a href="/backend/api/content-api/content-types.html">More detailed</a>)</td></tr><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Movie title</td></tr><tr><td style="text-align:left;"><code>description</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Movie description</td></tr><tr><td style="text-align:left;"><code>title_en</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Movie title in English</td></tr><tr><td style="text-align:left;"><code>description_en</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Movie description in English</td></tr><tr><td style="text-align:left;"><code>year</code></td><td style="text-align:left;">number<b style="color:red;">*</b></td><td style="text-align:left;">The year of the movie&#39;s premiere</td></tr><tr><td style="text-align:left;"><code>release_date</code></td><td style="text-align:left;">Date</td><td style="text-align:left;">Release date of the digital edition</td></tr><tr><td style="text-align:left;"><code>age_limit</code></td><td style="text-align:left;">number<b style="color:red;">*</b></td><td style="text-align:left;">Age limit on watching a movie</td></tr><tr><td style="text-align:left;"><code>countries</code></td><td style="text-align:left;">Country[]</td><td style="text-align:left;">Countries that took part in the shooting of the film</td></tr><tr><td style="text-align:left;"><code>actors</code></td><td style="text-align:left;">Actor[]</td><td style="text-align:left;">Actors who starred in the film</td></tr><tr><td style="text-align:left;"><code>directors</code></td><td style="text-align:left;">Director[]</td><td style="text-align:left;">Directors of the movie</td></tr><tr><td style="text-align:left;"><code>genres</code></td><td style="text-align:left;">Genre[]<b style="color:red;">*</b></td><td style="text-align:left;">Genres that the film corresponds to</td></tr><tr><td style="text-align:left;"><code>poster</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Link to the image used as a poster</td></tr><tr><td style="text-align:left;"><code>background</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Link to the image used as a cover</td></tr><tr><td style="text-align:left;"><code>imdb_rating</code></td><td style="text-align:left;">float</td><td style="text-align:left;">Rating of the movie on IMDB</td></tr><tr><td style="text-align:left;"><code>imdb_vote_count</code></td><td style="text-align:left;">number</td><td style="text-align:left;">The number of people who rated the movie on IMDB</td></tr><tr><td style="text-align:left;"><code>kinopoisk_rating</code></td><td style="text-align:left;">float</td><td style="text-align:left;">Rating of the movie on Kinopoisk</td></tr><tr><td style="text-align:left;"><code>kinopoisk_vote_count</code></td><td style="text-align:left;">number</td><td style="text-align:left;">The number of people who rated the movie on Kinopoisk</td></tr><tr><td style="text-align:left;"><code>source</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Link to .m3u8 playlist</td></tr><tr><td style="text-align:left;"><code>preview</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Link to the first frame of the video file</td></tr><tr><td style="text-align:left;"><code>duration</code></td><td style="text-align:left;">string<b style="color:red;">*</b></td><td style="text-align:left;">Duration of the video movie</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">NOTE</p><p><b style="color:red;">*</b> - required fields</p></div><details class="details custom-block"><summary>Details response</summary><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  contentType: MediaContentType;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Content info fields</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  title_en: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  description_en: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  year: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  release_date: Date;</span></span>
<span class="line"><span style="color:#A6ACCD;">  age_limit: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  countries?: Country[];</span></span>
<span class="line"><span style="color:#A6ACCD;">  actors?: Actor[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  directors?: Director[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  genres: Genre[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  poster: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Rating fields</span></span>
<span class="line"><span style="color:#A6ACCD;">  imdb_rating?: float,</span></span>
<span class="line"><span style="color:#A6ACCD;">  imdb_vote_count?: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  kinopoisk_rating?: float,</span></span>
<span class="line"><span style="color:#A6ACCD;">  kinopoisk_vote_count?: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // Media source fields</span></span>
<span class="line"><span style="color:#A6ACCD;">  source: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  preview: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details>`,4),o=[a];function i(d,r,c,p,y,g){return e(),l("div",null,o)}const C=t(n,[["render",i]]);export{x as __pageData,C as default};
