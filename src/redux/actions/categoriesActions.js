import CONSTANTS from "../constants";
import * as api from "./../api";
export const fetchAllCategories = () => async (dispatch, getState) => {
  dispatch({
    type: CONSTANTS.categories_list.CATEGORIES_LIST_REQUEST,
  });
  try {
    const { data } = await api.getCategories();
    dispatch({
      type: CONSTANTS.categories_list.CATEGORIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONSTANTS.categories_list.CATEGORIES_LIST_FAILED,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getJokeAction = (cat) => async (dispatch, getState) => {
  const {
    categories_list: { categories },
  } = getState();

  if (categories?.includes(cat)) {
    dispatch({ type: CONSTANTS.joke.USER_JOKE_RESET });
    dispatch({ type: CONSTANTS.joke.USER_JOKE_REQUEST });
    try {
      const { data } = await api.getJokes(cat);
      dispatch({ type: CONSTANTS.joke.USER_JOKE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CONSTANTS.joke.USER_JOKE_FAILED,
        payload: error?.response?.data?.message
          ? error.response.data.message
          : error.message,
      });
    }
  } else {
    dispatch({
      type: CONSTANTS.joke.USER_JOKE_FAILED,
      payload: "Invalid Category",
    });
  }
};
