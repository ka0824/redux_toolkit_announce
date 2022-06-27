import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data1: {
    title: "테스트용 제목 입니다.",
    text: "테스트용 본문 입니다.",
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.data1.title = action.payload;
    },
    changeText: (state, action) => {
      state.data1.text = action.payload;
    },
  },
});

export const { changeTitle, changeText } = postSlice.actions;
export default postSlice.reducer;
