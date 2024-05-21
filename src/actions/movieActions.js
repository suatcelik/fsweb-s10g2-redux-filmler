export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (id) => {
  return { type: ADD_MOVIE, payload: id };
};

export const addToFavorites = (movie) => {
  return { type: ADD_TO_FAVORITES, payload: movie };
};
