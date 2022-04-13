import { Grid } from "@mui/material";
import { GridProps } from "@mui/material/Grid/Grid";

import MovieCard from "components/MovieCard";

import { IMovie } from "types/apple";

interface IMoviesListSimple extends GridProps {
  movies: IMovie[];
}

const MoviesListSimple = ({ movies, ...rest }: IMoviesListSimple) => (
  <Grid container spacing={4} {...rest}>
    {movies.map(movie => (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`movie-${movie["im:name"].label}`}>
        <MovieCard movie={movie} />
      </Grid>
    ))}
  </Grid>
);

export default MoviesListSimple;