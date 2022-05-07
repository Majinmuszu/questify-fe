import { createAction } from "@reduxjs/toolkit";

const tokenAction = createAction("token/Token");
const currentUserAction = createAction("user/User");
const formVisibilityAction = createAction("form/Form");
const datePickAction = createAction("date/Date");
const showDoneTasksAction = createAction("done/Done");

export {
  tokenAction,
  currentUserAction,
  formVisibilityAction,
  datePickAction,
  showDoneTasksAction,
};
