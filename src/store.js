import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const middleware = [thunk, logger];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
