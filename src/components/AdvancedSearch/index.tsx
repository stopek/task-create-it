import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid, Slider, TextField, Typography } from "@mui/material";

import { ISearchState, setSearchParam } from "store/reducers/search";
import { getSearchParams } from "store/selectors/search";
import Select from "ui/forms/Select";

import { paths } from "routing/paths";
import { IMovie } from "types/apple";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { createArtist, createCategories } from "utils/movies";

interface IAdvancedSearch {
  movies: IMovie[];
}

type TFields = ISearchState["fields"];

const AdvancedSearch = ({ movies }: IAdvancedSearch) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const fields = useAppSelector(getSearchParams);

  const [forms, setForms] = useState<TFields>(fields);

  const setField = (item: Partial<Record<keyof TFields, any>>) => {
    setForms(prevForms => ({
      ...prevForms,
      ...item,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    dispatch<any>(setSearchParam(forms));
    event.preventDefault();

    navigate(paths.MOVIES);
  };

  useEffect(() => {
    setForms(fields);
  }, [fields]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <TextField
            id="search-basic"
            label="Type what would you watch?"
            variant="filled"
            fullWidth
            value={forms.phrase}
            onChange={(e) => setField({ phrase: e.target.value })}
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <Select
            label="Category"
            variant="filled"
            value={forms.category}
            options={createCategories(movies)}
            onChange={category => setField({ category: category.toString() })}
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <Typography id="input-slider" gutterBottom>
            Price
          </Typography>

          <Slider
            getAriaLabel={() => "Price"}
            value={forms.price}
            onChange={(_, value) => setField({ price: value as number[] })}
            valueLabelDisplay="auto"
            min={0}
            max={30}
            valueLabelFormat={(value) => `$${value}`}
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <Select
            label="Artist"
            variant="filled"
            value={forms.artist}
            options={createArtist(movies)}
            onChange={artist => setField({ artist })}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit" endIcon={<SearchIcon />}>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AdvancedSearch;