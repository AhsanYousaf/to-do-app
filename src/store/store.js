import { createStore } from "redux";
import reducer from "./crud";
//import { composeWithDevTools } from "redux-devtools-extension";
//import logger from "redux-logger";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;