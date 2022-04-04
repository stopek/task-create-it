import Layout from "components/Layout";
import MoviesListSimple from "components/MoviesListSimple";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { topMovies } from "store/reducers/apple";
import { getTopMovies } from "store/selectors/apple";

const MoviesContainer = () => {
  const movies = useAppSelector(getTopMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(topMovies());
  }, []);

  return (
    <Layout header footer>
      <MoviesListSimple movies={movies} />
    </Layout>
  );
};

export default MoviesContainer;