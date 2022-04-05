import { IGetTopMoviesResponse } from "types/services/apple";

import instance from "./instance";

const servicesApple = {
  getTopMovies: async () => {
    const response: IGetTopMoviesResponse = await instance.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json");

    return response?.data?.feed?.entry || [];
  },
};

export default servicesApple;