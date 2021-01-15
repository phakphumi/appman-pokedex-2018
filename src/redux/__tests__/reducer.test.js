import { OPEN_ADD_MODAL } from '../actionTypes';
import reducer from '../reducer';

describe('reducer', () => {
  describe('type: OPEN_ADD_MODAL', () => {
    it('should change showSearchModal to true if the old value is false', () => {
      const state = reducer({ showSearchModal: false }, { type: OPEN_ADD_MODAL });
  
      expect(state.showSearchModal).toEqual(true);
    });

    it('should keep showSearchModal as true if the old value is true', () => {
      const state = reducer({ showSearchModal: true }, { type: OPEN_ADD_MODAL });
  
      expect(state.showSearchModal).toEqual(true);
    });
  });
});
