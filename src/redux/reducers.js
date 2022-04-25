import { createReducer } from "@reduxjs/toolkit";
import { tokenAction } from "./actions";

const tokenReducer = createReducer("", {
  [tokenAction]: (state, { payload }) => payload,
});

export { tokenReducer };
