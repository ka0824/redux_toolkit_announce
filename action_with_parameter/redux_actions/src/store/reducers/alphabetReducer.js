import { handleActions } from "redux-actions";
import { CHANGEALPHABET } from "../actions/alphabetAction";

const initialState = {
  text: "선택 안됨",
};

const alphabetReducer = handleActions(
  {
    [CHANGEALPHABET]: (state, action) => {
      return { text: action.payload };
    },
  },
  initialState
);

export default alphabetReducer;
