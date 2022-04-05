import { useAppSelector } from "hooks/redux";
import MovieOverlay from "overlays/MovieOverlay";
import { useParams } from "react-router-dom";
import { getTopMovies } from "store/selectors/apple";
import { foundMovieById } from "utils/movies";

import MoviePreview from "ui/MoviePreview";
import NotFound from "ui/NotFound";

const MovieContainer = () => {
  const { id } = useParams<{ id: string }>();

  const movies = useAppSelector(getTopMovies);
  const found = foundMovieById(movies, id);

  return (
    <MovieOverlay>
      {!found ? (
        <NotFound withoutBackButton />
      ) : (
        <MoviePreview movie={found} />
      )}
    </MovieOverlay>
  );
};

export default MovieContainer;