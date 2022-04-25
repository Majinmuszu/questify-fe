import { configureStore } from "@reduxjs/toolkit";
import { questifyApi } from "../services/api";
import { tokenReducer } from "./reducers";

const preloadedState = {
  authToken: null,
};
export const store = configureStore({
  reducer: {
    [questifyApi.reducerPath]: questifyApi.reducer,
    authToken: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questifyApi.middleware),
  preloadedState,
});
