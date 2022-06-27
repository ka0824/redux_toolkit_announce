import produce from "immer";
import { IMMERCHANGETITLE, IMMERCHANGETEXT } from "../actions/immerAction";

const initialState = {
  data1: {
    immerTitle: "테스트용 제목 입니다",
    immerText: "테스트용 본문 입니다.",
  },
};

const immerReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case IMMERCHANGETITLE:
        draftState.data1.immerTitle = action.payload;
        break;
      case IMMERCHANGETEXT:
        draftState.data1.immerText = action.payload;
        break;
      default:
        state;
    }
  });
};

export default immerReducer;
