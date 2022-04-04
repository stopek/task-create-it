import { configureStore } from "@reduxjs/toolkit";
import { isProduction } from "hooks/envirionment";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "store/reducers";

const middleware = (getDefaultMiddleware: () => any) => (isProduction ? getDefaultMiddleware() : getDefaultMiddleware().concat(logger));

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

export {
  persistor,
};

export type {
  RootState,
  AppDispatch,
};

export default store;
