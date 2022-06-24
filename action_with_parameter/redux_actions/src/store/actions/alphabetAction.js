import { createAction } from "redux-actions";

export const CHANGEALPHABET = "CHANGE_ALPHABET";

export const changeAlphabet = createAction(
  CHANGEALPHABET,
  (payload) => payload
);
