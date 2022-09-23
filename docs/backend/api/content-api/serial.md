---
layout: doc
---


# Content API. Serial

##

### Serial response:
```
{
  id: string,
  contentType: MediaContentType,
  
  // Content info fields
  title: string,
  description: string,
  title_en: string,
  description_en: string,
  year: number,
  release_date: Date,
  age_limit: number,
  countries: Country[],
  actors: Actor[],
  directors: Director[],
  genres: Genre[],
  poster: string,
  background: string,
  
  // Rating fields
  imdb_rating: number,
  imdb_vote_count: number,
  kinopoisk_rating: number,
  kinopoisk_vote_count: number,
  
  seasons: Season[],
}
```

### Season response:
```
{
  id: string,
  contentType: MediaContentType,
  
  // Content info fields. Same as for serial
  title: string,
  title_en: string,
  poster: string,
  background: string,
  
  // Other fields are not required
  ...
  
  // Rating fields. Same as for serial. Are not required
  ... 
  
  episodes: Episode[],
}
```

### Episode response:
```
{
  id: string,
  contentType: MediaContentType,
  
  // Content info fields. Same as for serial
  title: string,
  title_en: string,
  
  // Other fields are not required
  ...
  
  // Rating fields. Same as for serial. Are not required
  ... 
  
  // Media source fields
  source: string,
  preview: string,
  duration: number,
}
```
