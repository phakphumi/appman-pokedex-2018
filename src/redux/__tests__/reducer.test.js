import { CLOSE_SEARCH_MODAL, OPEN_SEARCH_MODAL } from '../actionTypes';
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
});
