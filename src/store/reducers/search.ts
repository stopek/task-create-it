import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchState {
  fields: {
    phrase: string;
  };
}

const initialState: ISearchState = {
  fields: {
    phrase: "",
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParam: (state, action: PayloadAction<ISearchState["fields"]>) => {
      state.fields = { ...state.fields, ...action.payload };
    },
  },
});

export const { setSearchParam } = searchSlice.actions;

export {
  searchSlice,
};

export default searchSlice.reducer;
