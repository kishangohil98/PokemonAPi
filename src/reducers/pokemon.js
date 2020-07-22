import {
  FETCH_POKEMON,
  FETCH_ERROR,
  SEARCH_POKEMON,
  SEARCH_ERROR,
} from "../Actions/types";

const initialState = {
  pokemons: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemons: payload.results,
        loading: false,
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon) =>
          pokemon.name.includes(payload)
        ),

        loading: false,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
