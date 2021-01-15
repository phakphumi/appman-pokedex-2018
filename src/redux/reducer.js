import { OPEN_ADD_MODAL } from './actionTypes';

const initialState = {
  deck: [],
  showSearchModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ADD_MODAL:
      return {
        ...state,
        showSearchModal: true,
      }
  
    default: {
      return state;
    }
  }
};
