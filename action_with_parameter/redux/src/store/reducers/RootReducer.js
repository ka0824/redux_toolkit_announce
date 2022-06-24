import { combineReducers } from "redux";
import alphabetReducer from "./alphabetReducer";

const rootReducer = combineReducers({ alphabet: alphabetReducer });

export default rootReducer;
