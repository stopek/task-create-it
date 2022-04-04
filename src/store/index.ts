import { configureStore } from "@reduxjs/toolkit";
import { isProduction } from "hooks/envirionment";
import logger from "redux-logger";
import rootReducer from "store/reducers";

const middleware = (getDefaultMiddleware: () => any) => (isProduction ? getDefaultMiddleware() : getDefaultMiddleware().concat(logger));

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: !isProduction,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
