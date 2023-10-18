# Velozity Movie App Assignment

#### MERN web application that allows users to search for movies using the OMDB API and display the results. Additionally, users should be able to mark movies as favourites, which will be stored on the server-side storage (using in-memory data structure).

## Demo

https://movie-velozity.vercel.app/

## Authors

-  [@thesatyam05](https://www.github.com/thesatyam05)

## API Reference ( backend )

Backend_API: https://movie-app-velozity-xkww.vercel.app

#### Search Movie with Query

```http
  GET /api/movies/search?query=${movie_name}
```

| Parameter    | Type     | Description                   |
| :----------- | :------- | :---------------------------- |
| `movie_name` | `string` | **Required**. Movie to search |

#### Get all Favorite Movies

```http
  GET /api/movies/favorites/all
```

#### Add/Remove movie from Fav

```http
  POST /api/movies/favorites
```

| Parameter    | Type     | Description         |
| :----------- | :------- | :------------------ |
| `actionType` | `string` | add/remove          |
| `imdbID`     | `string` | imdbID of the movie |

## Local Setup

### Backend Local Setup

```bash
  cd backend
  npm install
```

-  add Env Variables to .env ( http://www.omdbapi.com/apikey.aspx )

```bash
  OMDB_API_KEY=
```

```bash
  npm run dev
```

Api server will start at http://localhost:8000

### Frontend Local Setup

```bash
  cd frontend
  npm install
```

-  Change baseUrl to http://localhost:8000 to connect to local backend

```bash
  export const baseUrl = 'localhost:8000';
```

```bash
  npm run dev
```

ReactJs Frontend will start at PORT shown in the terminal.
