import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state, action) {
      state++;
    },
    minus(state, action) {
      state--;
    },
  },
});
