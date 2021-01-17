import {
  ADD_CARD_TO_DECK,
  CLOSE_SEARCH_MODAL,
  OPEN_SEARCH_MODAL,
  REMOVE_CARD_FROM_DECK,
  REMOVE_SEARCH_RESULT,
  SET_SEARCH_RESULTS,
} from './actionTypes';

export const addCardToDeck = (card) => ({
  type: ADD_CARD_TO_DECK,
  payload: {
    card,
  },
});

export const closeSearchModal = () => ({
  type: CLOSE_SEARCH_MODAL,
})

export const openSearchModal = () => ({
  type: OPEN_SEARCH_MODAL,
})

export const removeCardFromDeck = (cardId) => ({
  type: REMOVE_CARD_FROM_DECK,
  payload: {
    cardId,
  },
});

export const removeSearchResult = (cardId) => ({
  type: REMOVE_SEARCH_RESULT,
  payload: {
    cardId,
  },
});

export const setSearchResults = (cards) => ({
  type: SET_SEARCH_RESULTS,
  payload: {
    cards,
  },
});
