import { combineReducers } from "redux";
import { categoriesList, getJokesReducer } from "./categoriesReducer";

export default combineReducers({
  categories_list: categoriesList,
  joke: getJokesReducer,
});
