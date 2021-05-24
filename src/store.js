// libs
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// reducers
import reducers from "./reducers/rootReducer";

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export const store = createStore(reducers, applyMiddleware(...middleware));
