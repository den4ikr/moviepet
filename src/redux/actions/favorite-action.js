import {
  SET_FAVORITE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_IS_FAVORITE,
} from "../../constants";
import {
  getFavouriteList,
  addToFavourites,
  removeFromFavourites,
  isFilmFavourite,
} from "../../services/localStorage";

const setFavorite = (favorite) => ({ type: SET_FAVORITE, favorite });
export const getFavorite = () => async (dispatch) => {
  const response = await getFavouriteList();
  dispatch(setFavorite(response));
};

const setAddFavorite = (item) => ({ type: ADD_FAVORITE, item });
export const addFavorite = (item) => async (dispatch) => {
  await addToFavourites(item);
  dispatch(setAddFavorite(item));
};

export const removeFavoriteAction = (id) => ({ type: REMOVE_FAVORITE, id });
export const removeFavorite = (id) => async (dispatch) => {
  await removeFromFavourites(id);
  dispatch(removeFavoriteAction(id));
};

export const setIsFavorite = (id) => ({ type: SET_IS_FAVORITE, id });
export const getIsFavorite = (id) => async (dispatch) => {
  await isFilmFavourite(id);
  dispatch(setIsFavorite(id));
};
