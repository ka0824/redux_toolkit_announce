import { CHANGETITLE, CHANGETEXT } from "../actions/postAction";

const initialState = {
  data1: {
    title: "테스트용 제목 입니다",
    text: "테스트용 본문 입니다.",
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGETITLE:
      return {
        data1: { ...state.data1, title: action.payload },
      };
    case CHANGETEXT:
      return { data1: { ...state.data1, text: action.payload } };

    default:
      return state;
  }
};

export default postReducer;
