import Layout from "components/Layout";
import MoviesListSimple from "components/MoviesListSimple";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { topMovies } from "store/reducers/apple";
import { getApiStatus, getTopMovies } from "store/selectors/apple";

const MoviesContainer = () => {
  const movies = useAppSelector(getTopMovies);
  const dispatch = useAppDispatch();
  const status = useAppSelector(getApiStatus);

  useEffect(() => {
    dispatch<any>(topMovies());
  }, [dispatch]);

  return (
    <Layout state={status} header footer>
      <MoviesListSimple movies={movies} />
    </Layout>
  );
};

export default MoviesContainer;