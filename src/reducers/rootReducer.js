// libs
import { combineReducers } from "redux";
// reducers
import video from "./video";
import album from "./album";
import love from "./love";

const reducers = combineReducers({
  video,
  album,
  love,
});

export default (state, action) => reducers(state, action);
