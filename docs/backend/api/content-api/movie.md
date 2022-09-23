# Content API. Movie

## Response:
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
  
  // Media source fields
  source: string,
  preview: string,
  duration: number,
}
```
