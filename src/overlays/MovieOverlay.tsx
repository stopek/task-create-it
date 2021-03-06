import { ReactNode, useEffect } from "react";

import Layout, { ILayout } from "components/Layout";

import { topMovies } from "store/reducers/apple";
import { getApiStatus } from "store/selectors/apple";

import { useAppDispatch, useAppSelector } from "hooks/redux";

interface IMovieOverlay extends ILayout {
  children: ReactNode;
}

const MovieOverlay = ({ children, ...rest }: IMovieOverlay) => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(getApiStatus);

  useEffect(() => {
    dispatch<any>(topMovies({ limit: 100 }));
  }, [dispatch]);

  return (
    <Layout state={status} header footer {...rest}>
      {children}
    </Layout>
  );
};

export default MovieOverlay;