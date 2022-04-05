import { ISearchState } from "store/reducers/search";
import { IMovie } from "types/apple";

const filteredMovies = (list: IMovie[], fields: ISearchState["fields"]): IMovie[] => {
  let localMovies = [...list];
  const phrase = fields.phrase;

  if (phrase.length > 0) {
    localMovies = localMovies.filter(movie => movie["im:name"].label.toLowerCase().includes(phrase.toLowerCase()));
  }

  return localMovies;
};

export {
  filteredMovies,
};