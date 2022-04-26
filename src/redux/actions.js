import { createAction } from "@reduxjs/toolkit";

const tokenAction = createAction("token/Token");
const currentUserAction = createAction("user/User");

export { tokenAction, currentUserAction };
