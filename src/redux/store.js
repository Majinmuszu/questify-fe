import { configureStore } from "@reduxjs/toolkit";
import { questifyApi } from "../services/api";
import {
  datePickReducer,
  formReducer,
  showDoneReducer,
  tokenReducer,
  userReducer,
} from "./reducers";

// const preloadedState = {
//   authToken: null,
//   // currentUser: { email: "test@mail.com" },
// };
export const store = configureStore({
  reducer: {
    [questifyApi.reducerPath]: questifyApi.reducer,
    authToken: tokenReducer,
    currentUser: userReducer,
    isFormVisible: formReducer,
    datePick: datePickReducer,
    isDoneVisible: showDoneReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      questifyApi.middleware
    ),
});
