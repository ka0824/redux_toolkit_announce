const initialState = 0;
import { ADD, MINUS } from "../actions/counterAction";

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
