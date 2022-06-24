import { CHANGEALPHABET } from "./../actions/alphabetAction";

const initialState = {
  text: "선택 안됨",
};

const alphabetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGEALPHABET:
      return { text: action.payload };

    default:
      return state;
  }
};

export default alphabetReducer;
