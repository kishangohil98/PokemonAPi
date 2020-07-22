import axios from "axios";
import {
  FETCH_POKEMON,
  FETCH_ERROR,
  SEARCH_POKEMON,
  SEARCH_ERROR,
} from "./types";

export const fetchPokemons = () => async (dispatch) => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = res.data;

    dispatch({ type: FETCH_POKEMON, payload: data });
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
      payload: err,
    });
  }
};

export const searchPokemons = (keyword) => async (dispatch) => {
  if (keyword == "" || keyword.length == 0) {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
      const data = res.data;

      dispatch({ type: FETCH_POKEMON, payload: data });
    } catch (err) {
      dispatch({
        type: FETCH_ERROR,
        payload: err,
      });
    }
  } else {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
      const data = res.data;
      dispatch({ type: FETCH_POKEMON, payload: data });

      dispatch({ type: SEARCH_POKEMON, payload: keyword });
    } catch (err) {
      dispatch({
        type: SEARCH_ERROR,
        payload: err,
      });
    }
  }
};
