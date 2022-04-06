import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchState {
  fields: {
    phrase: string;
    category: string;
    artist: string;
    price: number[];
  };
}

const initialState: ISearchState = {
  fields: {
    phrase: "",
    category: "",
    artist: "",
    price: [0, 0],
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParam: (state, action: PayloadAction<Partial<ISearchState["fields"]>>) => {
      state.fields = { ...state.fields, ...action.payload };
    },
  },
});

export const { setSearchParam } = searchSlice.actions;

export {
  searchSlice,
};

export default searchSlice.reducer;
