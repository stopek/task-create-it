import { IGetTopMoviesResponse } from "types/services/apple";

import instance from "./instance";

const baseUrl = "https://itunes.apple.com/us/rss";

const servicesApple = {
  getTopMovies: async (limit: number = 100) => {
    const response: IGetTopMoviesResponse = await instance.get(`${baseUrl}/topmovies3/limit=${limit}/json`);

    return response?.data?.feed?.entry || [];
  },
};

export default servicesApple;