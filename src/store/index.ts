import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { PERSIST } from "redux-persist/es/constants";
import storage from "redux-persist/lib/storage";

import rootReducer from "store/reducers";

import favouriteListener from "./listeners/favouriteListener";

import { isProduction } from "utils/envirionment";

const ignoreActions = {
  serializableCheck: {
    ignoredActions: [PERSIST],
  },
};

const middleware = (getDefaultMiddleware: (...props: any) => any) =>
  (isProduction ? getDefaultMiddleware(ignoreActions) : getDefaultMiddleware(ignoreActions).concat(logger));

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: !isProduction,
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

store.subscribe(favouriteListener);

export {
  persistor,
};

export type {
  RootState,
  AppDispatch,
};

export default store;
