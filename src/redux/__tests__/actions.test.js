import { openSearchModal } from '../actions';
import { OPEN_SEARCH_MODAL } from '../actionTypes'

describe('actions', () => {
  describe('openSearchModal', () => {
    it('should return type equal to OPEN_SEARCH_MODAL', () => {
      const result = openSearchModal();

      expect(result.type).toEqual(OPEN_SEARCH_MODAL);
    });
  });
});
