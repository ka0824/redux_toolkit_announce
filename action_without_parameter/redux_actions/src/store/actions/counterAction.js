import { createAction } from "redux-actions";

export const ADD = "ADD";
export const MINUS = "MINUS";

export const add = createAction(ADD);
export const minus = createAction(MINUS);
