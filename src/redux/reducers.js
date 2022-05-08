import { createReducer } from "@reduxjs/toolkit";
import {
  currentUserAction,
  tokenAction,
  formVisibilityAction,
  datePickAction,
  showDoneTasksAction,
} from "./actions";


const tokenReducer = createReducer(null, {
  [tokenAction]: (state, { payload }) => payload,
});
const userReducer = createReducer(null, {
  [currentUserAction]: (state, { payload }) => payload,
});
const formReducer = createReducer(false, {
  [formVisibilityAction]: (state, { payload }) => payload,
});
const datePickReducer = createReducer(null, {
  [datePickAction]: (state, { payload }) => payload,
});
const showDoneReducer = createReducer(false, {
  [showDoneTasksAction]: (state, { payload }) => payload,
});

export {
  tokenReducer,
  userReducer,
  formReducer,
  datePickReducer,
  showDoneReducer,
};
