import { configureStore } from "@reduxjs/toolkit";
import alphabetReducer from "./slice/alphabetSlice";

const store = configureStore({
  reducer: { alphabet: alphabetReducer },
  devTools: true,
});

export default store;
