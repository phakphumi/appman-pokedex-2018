import {
  CLOSE_SEARCH_MODAL,
  OPEN_SEARCH_MODAL,
  SET_SEARCH_RESULTS
} from '../actionTypes';
import reducer from '../reducer';

describe('reducer', () => {
  describe('type: CLOSE_SEARCH_MODAL', () => {
    it('should change showSearchModal to false if the old value is true', () => {
      const state = reducer({ showSearchModal: true }, { type: CLOSE_SEARCH_MODAL });
  
      expect(state.showSearchModal).toEqual(false);
    });

    it('should keep showSearchModal as false if the old value is false', () => {
      const state = reducer({ showSearchModal: false }, { type: CLOSE_SEARCH_MODAL });
  
      expect(state.showSearchModal).toEqual(false);
    });
  });

  describe('type: OPEN_SEARCH_MODAL', () => {
    it('should change showSearchModal to true if the old value is false', () => {
      const state = reducer({ showSearchModal: false }, { type: OPEN_SEARCH_MODAL });
  
      expect(state.showSearchModal).toEqual(true);
    });

    it('should keep showSearchModal as true if the old value is true', () => {
      const state = reducer({ showSearchModal: true }, { type: OPEN_SEARCH_MODAL });
  
      expect(state.showSearchModal).toEqual(true);
    });
  });

  describe('type: SET_SEARCH_RESULTS', () => {
    it('should set searchResults according to payload.cards', () => {
      const cards = [
        { id: 'a1'},
        { id: 'a2'},
        { id: 'a3'},
      ];
      const state = reducer({ searchResults: [] }, {
        type: SET_SEARCH_RESULTS,
        payload: { cards },
      });

      expect(state.searchResults).toHaveLength(cards.length);
      expect(state.searchResults[0].id).toEqual(cards[0].id);
      expect(state.searchResults[1].id).toEqual(cards[1].id);
      expect(state.searchResults[2].id).toEqual(cards[2].id);
    });
  });
});
