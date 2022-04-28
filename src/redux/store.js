import { configureStore } from "@reduxjs/toolkit";
import { questifyApi } from "../services/api";
import { tokenReducer, userReducer } from "./reducers";

// const preloadedState = {
//   authToken: null,
//   // currentUser: { email: "test@mail.com" },
// };
export const store = configureStore({
  reducer: {
    [questifyApi.reducerPath]: questifyApi.reducer,
    authToken: tokenReducer,
    currentUser: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questifyApi.middleware)
});
