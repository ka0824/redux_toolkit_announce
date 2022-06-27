import postReducer from "./slice/postSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { post: postReducer },
  devTools: true,
});

export default store;
