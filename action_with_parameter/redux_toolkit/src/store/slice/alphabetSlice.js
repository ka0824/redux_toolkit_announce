import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "선택 안됨",
};

const alphabetSlice = createSlice({
  name: "alphabet",
  initialState,
  reducers: {
    changeAlphabet(state, action) {
      state.text = action.payload;
    },
  },
});

export const { changeAlphabet } = alphabetSlice.actions;
export default alphabetSlice.reducer;
