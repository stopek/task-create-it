import MovieOverlay from "overlays/MovieOverlay";

import Search from "components/Search";

const SearchContainer = () => (
  <MovieOverlay>
    <Search expanded />
    {/* @todo - advanced search */}
    advanced serach.
  </MovieOverlay>
);

export default SearchContainer;