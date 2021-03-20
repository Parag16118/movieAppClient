import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./types";
import axios from "axios";
import { baseUrl } from '../shared/baseUrl';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};

export const fetchMovies = text => dispatch => {
  axios
    .get(baseUrl+'result?'+new URLSearchParams({
      movieName:text,
  }))
    .then(response => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(baseUrl+'result/'+id)
    // .then(response => response.json())
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};
