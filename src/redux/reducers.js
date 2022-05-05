import { createReducer } from "@reduxjs/toolkit";
import {
  currentUserAction,
  tokenAction,
  formVisibilityAction,
  datePickAction,
} from "./actions";

const tokenReducer = createReducer(null, {
  [tokenAction]: (state, { payload }) => payload,
});
const userReducer = createReducer("", {
  [currentUserAction]: (state, { payload }) => payload,
});
const formReducer = createReducer(false, {
  [formVisibilityAction]: (state, { payload }) => payload,
});
const datePickReducer = createReducer(null, {
  [datePickAction]: (state, { payload }) => payload,
});

export { tokenReducer, userReducer, formReducer, datePickReducer };
