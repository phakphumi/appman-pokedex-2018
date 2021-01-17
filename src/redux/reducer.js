import {
  ADD_CARD_TO_DECK,
  CLOSE_SEARCH_MODAL,
  OPEN_SEARCH_MODAL,
  REMOVE_CARD_FROM_DECK,
  REMOVE_SEARCH_RESULT,
  SET_SEARCH_RESULTS,
} from './actionTypes';

const initialState = {
  deck: [],
  searchResults: [],
  showSearchModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK: {
      return {
        ...state,
        deck: [
          ...state.deck,
          action.payload.card
        ],
      };
    }
    case CLOSE_SEARCH_MODAL: {
      return {
        ...state,
        showSearchModal: false,
      };
    }
    case OPEN_SEARCH_MODAL: {
      return {
        ...state,
        showSearchModal: true,
      };
    }
    case REMOVE_CARD_FROM_DECK: {
      const cloneDeck = [...state.deck];
      const index = cloneDeck.findIndex(card => card?.id === action.payload.cardId);
      cloneDeck.splice(index, 1);

      return {
        ...state,
        deck: cloneDeck,
      };
    }
    case REMOVE_SEARCH_RESULT: {
      const cloneSearchResult = [...state.searchResults];
      const index = cloneSearchResult.findIndex(card => card?.id === action.payload.cardId);
      cloneSearchResult.splice(index, 1);

      return {
        ...state,
        searchResults: cloneSearchResult
      }
    }
    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action?.payload?.cards || [],
      };
    }

    default: {
      return state;
    }
  }
};
