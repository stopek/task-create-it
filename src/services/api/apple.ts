import instance from "./instance";

const servicesApple = {
  getTopMovies: async () => await instance.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json"),
};

export default servicesApple;