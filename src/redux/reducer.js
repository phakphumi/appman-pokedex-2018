import { CLOSE_SEARCH_MODAL, OPEN_SEARCH_MODAL } from './actionTypes';

const initialState = {
  deck: [],
  showSearchModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_SEARCH_MODAL: {
      return {
        ...state,
        showSearchModal: false,
      }
    }
    case OPEN_SEARCH_MODAL: {
      return {
        ...state,
        showSearchModal: true,
      }
    }

    default: {
      return state;
    }
  }
};
