import { ISearchState } from "store/reducers/search";
import { IMovie } from "types/apple";
import { ISelectOption } from "../ui/forms/Select";

const filteredMovies = (list: IMovie[], fields: ISearchState["fields"]): IMovie[] => {
  let localMovies = [...list];
  const { phrase, category, price, artist } = fields;

  if (phrase.length > 0) {
    localMovies = localMovies.filter(movie => movie["im:name"].label.toLowerCase().includes(phrase.toLowerCase()));
  }

  if (category.length > 0) {
    localMovies = localMovies.filter(movie => movie.category.attributes["im:id"] === category);
  }

  if (artist.length > 0) {
    localMovies = localMovies.filter(movie => movie["im:artist"].label === artist);
  }

  if (price[0] > 0 || price[1] > 0) {
    localMovies = localMovies.filter(movie => {
      const moviePrice = parseFloat(movie["im:price"].attributes.amount);

      return moviePrice >= price[0] && moviePrice <= price[1];
    });
  }

  return localMovies;
};

const foundMovieById = (list: IMovie[], id?: string) => list.find(movie => movie.id.attributes["im:id"] === id);

const createCategories = (movies: IMovie[]): ISelectOption[] => {
  const exists: string[] = [];
  const response: ISelectOption[] = [];

  movies.forEach(movie => {
    const id = movie.category.attributes["im:id"];
    if (!exists.includes(id)) {
      response.push({ label: movie.category.attributes.label, value: id });
      exists.push(id);
    }
  });

  return response;
};

const createArtist = (movies: IMovie[]): ISelectOption[] => {
  const exists: string[] = [];
  const response: ISelectOption[] = [];

  movies.forEach(movie => {
    const name = movie["im:artist"].label;
    if (!exists.includes(name)) {
      response.push({ label: name, value: name });
      exists.push(name);
    }
  });

  return response;
};

const existsInFavourites = (movies: IMovie[], id: string) => !!movies.find(movie => movie.id.attributes["im:id"] === id);

const createMoviesFromIds = (movies: IMovie[], ids: string[]): IMovie[] => {
  const response: IMovie[] = [];

  ids.forEach(id => {
    const found = movies.find(movie => movie.id.attributes["im:id"] === id);
    if (found) {
      response.push(found);
    }
  });

  return response;
}


export {
  filteredMovies,
  foundMovieById,
  createCategories,
  createArtist,
  existsInFavourites,
  createMoviesFromIds,
};