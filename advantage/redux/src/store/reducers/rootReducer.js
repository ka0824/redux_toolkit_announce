import { combineReducers } from "redux";
import postReducer from "./postReducer";
import immerReducer from "./immerReducer";

const rootReducer = combineReducers({
  postData: postReducer,
  immerData: immerReducer,
});

export default rootReducer;
