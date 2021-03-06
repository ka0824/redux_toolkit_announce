import counterReducer from "./slice/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

export default store;
