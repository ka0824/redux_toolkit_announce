import { handleActions } from "redux-actions";
import { ADD, MINUS } from "./../actions/counterAction";

const initialState = 0;

const counterReducer = handleActions(
  {
    [ADD]: (state, action) => {
      return state + 1;
    },
    [MINUS]: (state, action) => {
      return state - 1;
    },
  },
  initialState
);

export default counterReducer;
