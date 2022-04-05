import { RootState } from "../index";

export const getSearchParams = (state: RootState) => state.search.fields;