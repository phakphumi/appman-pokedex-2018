import { CLOSE_SEARCH_MODAL, OPEN_SEARCH_MODAL } from './actionTypes';

export const openSearchModal = () => ({
  type: OPEN_SEARCH_MODAL,
})

export const closeSearchModal = () => ({
  type: CLOSE_SEARCH_MODAL,
})