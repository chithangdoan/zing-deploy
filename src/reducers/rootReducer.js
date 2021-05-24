// libs
import { combineReducers } from "redux";
import en from "./enReducers";
import vi from "./viReducers";
import lang from "./langReducers";

const reducers = combineReducers({
  en,
  vi,
  lang,
});

export default (state, action) => reducers(state, action);
