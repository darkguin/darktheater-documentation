---
layout: doc
---


# Content API. Serials

::: info NOTE
<b style="color:red">*</b> - required fields
:::

## Serial

| Field name                 | Type                                       | Description                                                                    |
|:---------------------------|:-------------------------------------------|:-------------------------------------------------------------------------------|
| ```id```                   | string<b style="color:red">*</b>           | The unique ID of the serial                                                    |
| ```contentType```          | MediaContentType<b style="color:red">*</b> | Type of the content. ([More detailed](/backend/api/content-api/content-types)) |
| ```title```                | string<b style="color:red">*</b>           | Serial title                                                                   |
| ```description```          | string<b style="color:red">*</b>           | Serial description                                                             |         
| ```year```                 | number<b style="color:red">*</b>           | The year of the serial's premiere                                              |
| ```release_date```         | Date                                       | Release date of the digital edition                                            |
| ```age_limit```            | number<b style="color:red">*</b>           | Age limit on watching a serial                                                 |
| ```countries```            | Country[]                                  | Countries that took part in the shooting of the serial                         |
| ```actors```               | Actor[]                                    | Actors who starred in the serial                                               |
| ```directors```            | Director[]                                 | Directors of the serial                                                        |
| ```genres```               | Genre[]<b style="color:red">*</b>          | Genres that the serial corresponds to                                          |
| ```poster```               | string<b style="color:red">*</b>           | Link to the image used as a poster                                             |
| ```background```           | string<b style="color:red">*</b>           | Link to the image used as a cover                                              |
| ```imdb_rating```          | float                                      | Rating of the serial on IMDB                                                   |
| ```imdb_vote_count```      | number                                     | The number of people who rated the serial on IMDB                              |
| ```kinopoisk_rating```     | float                                      | Rating of the serial on Kinopoisk                                              |
| ```kinopoisk_vote_count``` | number                                     | The number of people who rated the serial on Kinopoisk                         |
| ```seasons```              | Season[]<b style="color:red">*</b>         | List of seasons of this serial                                                 |

::: details Details response
```
{
  id: string;
  contentType: MediaContentType;
  
  // Content info fields
  title: string;
  description: string;
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
  
  seasons: Season[],
}
```
:::


## Season

| Field name                 | Type                                       | Description                                                                    |
|:---------------------------|:-------------------------------------------|:-------------------------------------------------------------------------------|
| ```id```                   | string<b style="color:red">*</b>           | The unique ID of the season                                                    |
| ```contentType```          | MediaContentType<b style="color:red">*</b> | Type of the content. ([More detailed](/backend/api/content-api/content-types)) |
| ```title```                | string<b style="color:red">*</b>           | Season title                                                                   |
| ```description```          | string                                     | Season description                                                             |         
| ```year```                 | number<b style="color:red">*</b>           | The year of the season's premiere                                              |
| ```release_date```         | Date                                       | Release date of the digital edition                                            |
| ```age_limit```            | number                                     | Age limit on watching a season                                                 |
| ```countries```            | Country[]                                  | Countries that took part in the shooting of the season                         |
| ```actors```               | Actor[]                                    | Actors who starred in the season                                               |
| ```directors```            | Director[]                                 | Directors of the season                                                        |
| ```genres```               | Genre[]                                    | Genres that the season corresponds to                                          |
| ```poster```               | string<b style="color:red">*</b>           | Link to the image used as a poster                                             |
| ```background```           | string<b style="color:red">*</b>           | Link to the image used as a cover                                              |
| ```imdb_rating```          | float                                      | Rating of the season on IMDB                                                   |
| ```imdb_vote_count```      | number                                     | The number of people who rated the season on IMDB                              |
| ```kinopoisk_rating```     | float                                      | Rating of the season on Kinopoisk                                              |
| ```kinopoisk_vote_count``` | number                                     | The number of people who rated the season on Kinopoisk                         |
| ```episodes```             | Episode[]<b style="color:red">*</b>        | List of episodes of this season                                                |

::: details Details response
```
{
  id: string;
  contentType: MediaContentType;
  
  // Content info fields
  title: string;
  description?: string;
  year: number;
  release_date?: Date;
  age_limit?: number;
  countries?: Country[];
  actors?: Actor[],
  directors?: Director[],
  genres?: Genre[],
  poster: string,
  background: string,
  
  // Rating fields
  imdb_rating?: float,
  imdb_vote_count?: number,
  kinopoisk_rating?: float,
  kinopoisk_vote_count?: number,
  
  episodes: Episode[],
}
```
:::

## Episode

| Field name                 | Type                                       | Description                                                                    |
|:---------------------------|:-------------------------------------------|:-------------------------------------------------------------------------------|
| ```id```                   | string<b style="color:red">*</b>           | The unique ID of the episode                                                   |
| ```contentType```          | MediaContentType<b style="color:red">*</b> | Type of the content. ([More detailed](/backend/api/content-api/content-types)) |
| ```title```                | string<b style="color:red">*</b>           | Episode title                                                                  |
| ```description```          | string                                     | Episode description                                                            |         
| ```year```                 | number                                     | The year of the episode's premiere                                             |
| ```release_date```         | Date<b style="color:red">*</b>             | Release date of the episode                                                    |
| ```age_limit```            | number                                     | Age limit on watching a episode                                                |
| ```countries```            | Country[]                                  | Countries that took part in the shooting of the episode                        |
| ```actors```               | Actor[]                                    | Actors who starred in the episode                                              |
| ```directors```            | Director[]                                 | Directors of the episode                                                       |
| ```genres```               | Genre[]                                    | Genres that the episode corresponds to                                         |
| ```poster```               | string                                     | Link to the image used as a poster                                             |
| ```background```           | string                                     | Link to the image used as a cover                                              |
| ```imdb_rating```          | float                                      | Rating of the episode on IMDB                                                  |
| ```imdb_vote_count```      | number                                     | The number of people who rated the episode on IMDB                             |
| ```kinopoisk_rating```     | float                                      | Rating of the episode on Kinopoisk                                             |
| ```kinopoisk_vote_count``` | number                                     | The number of people who rated the episode on Kinopoisk                        |
| ```source```               | string<b style="color:red">*</b>           | Link to .m3u8 playlist                                                         |
| ```preview```              | string<b style="color:red">*</b>           | Link to the first frame of the video file                                      |
| ```duration```             | string<b style="color:red">*</b>           | Duration of the video episode                                                  |

::: details Details response
```
{
  id: string;
  contentType: MediaContentType;
  
  // Content info fields
  title: string;
  description?: string;
  year?: number;
  release_date: Date;
  age_limit?: number;
  countries?: Country[];
  actors?: Actor[],
  directors?: Director[],
  genres?: Genre[],
  poster?: string,
  background?: string,
  
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
