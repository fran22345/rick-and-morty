import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actiontype";

const initialState = {
  myFavorite: [],
  allChracters: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAV:
      return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };

    case FILTER:
      let filterChar;
      if (actions.payload === "Todos") {
        filterChar = state.allChracters;
      } else {
        filterChar = state.allChracters.filter(
          (val) => val.gender === actions.payload
        );
      }
      return {
        ...state,
        myFavorite: filterChar,
      };

    case ORDER:
      let result;
      if (actions.payload === "A")
        result = state.allChracters.sort((a, b) => a.id - b.id);
      if (actions.payload === "D")
        result = state.allChracters.sort((a, b) => b.id - a.id);

      return {
        ...state,
        myFavorite: result,
      };

    default:
      return { ...state };
  }
};

export default reducer;
