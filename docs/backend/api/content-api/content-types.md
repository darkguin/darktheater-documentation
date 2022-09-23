---
layout: doc
---


# Content API. Content types

## Types of media content:
- `Movie` - content consisting of a single video file with a duration of **~5 minutes or more**.
- `Serial` - content consisting of one or more seasons. **Does not have a video source**.
- `Season` - content consisting of one or more episodes. **Does not have a video source**.
- `Episode` - content consisting of a single video file with a duration of **~5 min or more**. It is 
   part of the `season`.
- `Moment` - content representing a clipping from a `movie` or `episode` and consisting of a single video file lasting 
   from **a few seconds to ~5 minutes**. Can be created by the user.

### Code:
```
enum MediaContentType {
  MOVIE,
  SERIAL,
  SEASON,
  EPISODE",
  MOMENT
}
```
