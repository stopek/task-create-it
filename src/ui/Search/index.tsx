import { useEffect, useState } from "react";
import { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled as style } from "@mui/material/styles";

import { setSearchParamWithReset } from "store/reducers/search";
import { getSearchParams } from "store/selectors/search";

import { paths } from "routing/paths";

import { useAppDispatch, useAppSelector } from "hooks/redux";

const StyledTextField = style(TextField)`
  .MuiInputBase-root {
    border-radius: 25px;
  }

  ${props => props.theme.breakpoints.up("md")} {
    width: 30vw;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

interface ISearch {
  expanded?: boolean;
}

const Search = ({ expanded }: ISearch) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const fields = useAppSelector(getSearchParams);

  const [search, setSearch] = useState<boolean>(expanded || !!fields?.phrase?.length);
  const [phrase, setPhrase] = useState<string>("");

  const handleSearchToggle = () => !expanded ? setSearch(prevState => !prevState) : undefined;

  const handleChange = (p: string) => setPhrase(p);

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key !== "Enter") {
      return;
    }

    dispatch<any>(setSearchParamWithReset({ phrase }));
    event.preventDefault();
    navigate(paths.MOVIES);
  };

  useEffect(() => {
    setPhrase(fields.phrase);
  }, [fields.phrase]);

  return (
    <Container>
      {search && (
        <StyledTextField
          id="search-basic"
          label="Type what would you watch and press enter"
          variant="filled"
          size="small"
          fullWidth
          value={phrase}
          onChange={(e) => handleChange(e.target.value)}
          InputProps={{
            disableUnderline: true,
            onKeyDown: event => handleSubmit(event),
            autoComplete: "off",
          }}
        />
      )}

      {!expanded && (
        <IconButton
          size="large"
          aria-label="search"
          color="inherit"
          type="submit"
          onClick={handleSearchToggle}
        >
          <SearchIcon />
        </IconButton>
      )}
    </Container>
  );
};

export default Search;