import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { topMovies } from "store/reducers/apple";
import { getApiStatus, getTopMovies } from "store/selectors/apple";
import { getSearchParams } from "store/selectors/search";
import { filteredMovies } from "utils/movies";

import Layout from "components/Layout";
import MoviesListSimple from "components/MoviesListSimple";

import NotFound from "ui/NotFound";

const MoviesContainer = () => {
  const dispatch = useAppDispatch();

  const fields = useAppSelector(getSearchParams);
  const movies = useAppSelector(getTopMovies);
  const status = useAppSelector(getApiStatus);
  const filtered = filteredMovies(movies, fields);

  useEffect(() => {
    dispatch<any>(topMovies({ limit: 100 }));
  }, [dispatch]);

  return (
    <Layout state={status} header footer>
      {!filtered.length && (
        <NotFound withoutBackButton />
      )}

      <MoviesListSimple movies={filtered} />
    </Layout>
  );
};

export default MoviesContainer;