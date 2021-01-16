import {
  CLOSE_SEARCH_MODAL,
  OPEN_SEARCH_MODAL,
  SET_SEARCH_RESULTS,
} from './actionTypes';

export const openSearchModal = () => ({
  type: OPEN_SEARCH_MODAL,
})

export const closeSearchModal = () => ({
  type: CLOSE_SEARCH_MODAL,
})

export const setSearchResults = (cards) => ({
  type: SET_SEARCH_RESULTS,
  payload: {
    cards,
  },
});
