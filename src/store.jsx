import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
import logger from "redux-logger";

import rootReducer from "./reducers";

const middleware = [logger, thunk];
const allStoreEnhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, allStoreEnhancers);

export default store;
