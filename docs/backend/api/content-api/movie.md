---
layout: doc
---


# Content API. Movie

| Field name                 | Type                                       | Description                                                                    |
|:---------------------------|:-------------------------------------------|:-------------------------------------------------------------------------------|
| ```id```                   | string<b style="color:red">*</b>           | The unique ID of the movie                                                     |
| ```contentType```          | MediaContentType<b style="color:red">*</b> | Type of the content. ([More detailed](/backend/api/content-api/content-types)) |
| ```title```                | string<b style="color:red">*</b>           | Movie title                                                                    |
| ```description```          | string<b style="color:red">*</b>           | Movie description                                                              |         
| ```title_en```             | string<b style="color:red">*</b>           | Movie title in English                                                         |
| ```description_en```       | string<b style="color:red">*</b>           | Movie description in English                                                   |
| ```year```                 | number<b style="color:red">*</b>           | The year of the movie's premiere                                               |
| ```release_date```         | Date                                       | Release date of the digital edition                                            |
| ```age_limit```            | number<b style="color:red">*</b>           | Age limit on watching a movie                                                  |
| ```countries```            | Country[]                                  | Countries that took part in the shooting of the film                           |
| ```actors```               | Actor[]                                    | Actors who starred in the film                                                 |
| ```directors```            | Director[]                                 | Directors of the movie                                                         |
| ```genres```               | Genre[]<b style="color:red">*</b>          | Genres that the film corresponds to                                            |
| ```poster```               | string<b style="color:red">*</b>           | Link to the image used as a poster                                             |
| ```background```           | string<b style="color:red">*</b>           | Link to the image used as a cover                                              |
| ```imdb_rating```          | float                                      | Rating of the movie on IMDB                                                    |
| ```imdb_vote_count```      | number                                     | The number of people who rated the movie on IMDB                               |
| ```kinopoisk_rating```     | float                                      | Rating of the movie on Kinopoisk                                               |
| ```kinopoisk_vote_count``` | number                                     | The number of people who rated the movie on Kinopoisk                          |
| ```source```               | string<b style="color:red">*</b>           | Link to .m3u8 playlist                                                         |
| ```preview```              | string<b style="color:red">*</b>           | Link to the first frame of the video file                                      |
| ```duration```             | string<b style="color:red">*</b>           | Duration of the video movie                                                    |


::: info NOTE
<b style="color:red">*</b> - required fields
:::

::: details Details response
```
{
  id: string;
  contentType: MediaContentType;
  
  // Content info fields
  title: string;
  description: string;
  title_en: string;
  description_en: string;
  year: number;
  release_date: Date;
  age_limit: number;
  countries?: Country[];
  actors?: Actor[],
  directors?: Director[],
  genres: Genre[],
  poster: string,
  background: string,
  
  // Rating fields
  imdb_rating?: float,
  imdb_vote_count?: number,
  kinopoisk_rating?: float,
  kinopoisk_vote_count?: number,
  
  // Media source fields
  source: string,
  preview: string,
  duration: number,
}
```
::: 
