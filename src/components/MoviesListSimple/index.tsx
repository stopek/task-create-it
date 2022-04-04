import { Grid } from "@mui/material";
import { IMovie } from "types/apple";

import MovieCard from "ui/MovieCard";

interface IMoviesListSimple {
  movies: IMovie[];
}

const MoviesListSimple = ({ movies }: IMoviesListSimple) => (
  <Grid container spacing={4}>
    {movies.map(movie => (
      <Grid item xs={12} md={4} lg={3} key={`movie-${movie["im:name"].label}`}>
        <MovieCard movie={movie} />
      </Grid>
    ))}
  </Grid>
);

export default MoviesListSimple;