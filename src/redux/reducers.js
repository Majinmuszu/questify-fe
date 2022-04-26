import { createReducer } from "@reduxjs/toolkit";
import { currentUserAction, tokenAction } from "./actions";

const tokenReducer = createReducer(null, {
  [tokenAction]: (state, { payload }) => payload,
});
const userReducer = createReducer("", {
  [currentUserAction]: (state, { payload }) => payload,
});

export { tokenReducer, userReducer };
