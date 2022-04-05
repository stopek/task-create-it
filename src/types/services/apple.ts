import { IMovie } from "../apple";

export interface IGetTopMoviesResponse {
  data: {
    feed: {
      entry: IMovie[]
    }
  };
}