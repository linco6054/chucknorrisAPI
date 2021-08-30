import CONSTANTS from "../constants";

export const categoriesList = (state = { loading: true }, action) => {
  switch (action.type) {
    case CONSTANTS.categories_list.CATEGORIES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.categories_list.CATEGORIES_LIST_SUCCESS:
      localStorage.setItem("categories", JSON.stringify(action?.payload));
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case CONSTANTS.categories_list.CATEGORIES_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getJokesReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case CONSTANTS.joke.USER_JOKE_RESET:
      return {};
    case CONSTANTS.joke.USER_JOKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.joke.USER_JOKE_SUCCESS:
      return {
        ...state,
        loading: false,
        joke: action.payload,
      };

    case CONSTANTS.joke.USER_JOKE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
