import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers";

const initialState = {
  categories_list: {
    categories: localStorage.getItem("categories")
      ? JSON.parse(localStorage.getItem("categories"))
      : null,
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
