// libs
import { combineReducers } from "redux";
// reducers
import video from "./video";
import album from "./album";

const reducers = combineReducers({
  video,
  album,
});

export default (state, action) => reducers(state, action);
