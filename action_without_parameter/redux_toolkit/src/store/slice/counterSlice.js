import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state, action) {
      state.value++;
    },
    minus(state, action) {
      state.value--;
    },
  },
});

export const { add, minus } = counterSlice.actions;

export default counterSlice.reducer;
