import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 25px;
  }

  width: 50vw;
`;

const Container = styled.div`
  display: flex;
  gap: 15px;
`;

interface ISearch {
  expanded?: boolean;
}

const Search = ({ expanded }: ISearch) => {
  const [search, setSearch] = useState<boolean>(expanded || false);

  const handleSearchToggle = () => !expanded ? setSearch(prevState => !prevState) : undefined;

  return (
    <Container>
      {search && (
        <StyledTextField
          id="search-basic"
          label="What would you watch?"
          variant="filled"
          size="small"
          fullWidth
          InputProps={{
            disableUnderline: true,
          }}
        />
      )}

      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        onClick={handleSearchToggle}
      >
        <SearchIcon />
      </IconButton>
    </Container>
  );
};

export default Search;