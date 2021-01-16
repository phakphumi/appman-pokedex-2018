import {
  CLOSE_SEARCH_MODAL,
  OPEN_SEARCH_MODAL,
  SET_SEARCH_RESULTS,
} from './actionTypes';

const initialState = {
  deck: [],
  searchResults: [],
  showSearchModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
