import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { topMovies } from "store/reducers/apple";
import { getApiStatus, getTopMovies } from "store/selectors/apple";

import Layout from "components/Layout";
import MoviesListSimple from "components/MoviesListSimple";

const MoviesContainer = () => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector(getTopMovies);
  const status = useAppSelector(getApiStatus);

  useEffect(() => {
    dispatch<any>(topMovies({ limit: 12 }));
  }, [dispatch]);

  return (
    <Layout state={status} header footer>
      <MoviesListSimple movies={movies} />
    </Layout>
  );
};

export default MoviesContainer;