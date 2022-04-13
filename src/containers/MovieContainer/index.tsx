import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Typography } from "@mui/material";

import MoviePreview from "components/MoviePreview";
import MoviesListSimple from "components/MoviesListSimple";
import NotFound from "components/NotFound";

import MovieOverlay from "overlays/MovieOverlay";

import { getTopMovies } from "store/selectors/apple";

import { useAppSelector } from "hooks/redux";
import { filteredMovies, foundMovieById } from "utils/movies";

import { IMovie } from "types/apple";

const MovieContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<IMovie>();
  const [similar, setSimilar] = useState<IMovie[]>([]);

  const movies = useAppSelector(getTopMovies);

  useEffect(() => {
    const found = foundMovieById(movies, id);
    const categoryId = found?.category?.attributes["im:id"];
    const foundSimilar = categoryId ? filteredMovies(movies, {
      category: categoryId,
    }).filter(item => item.id.attributes["im:id"] !== id) : [];

    setMovie(found);
    setSimilar(foundSimilar);
  }, [id, movies]);

  return (
    <MovieOverlay>
      {!movie ? (
        <NotFound withoutBackButton />
      ) : (
        <>
          <MoviePreview movie={movie} />

          {similar.length > 0 && (
            <>
              <Typography variant="h5" mt={5} mb={2}>
                Similar movies
              </Typography>

              <MoviesListSimple movies={similar} />
            </>
          )}
        </>
      )}
    </MovieOverlay>
  );
};

export default MovieContainer;