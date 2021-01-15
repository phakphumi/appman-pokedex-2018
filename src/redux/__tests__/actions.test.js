import { openAddModal } from '../actions';
import { OPEN_ADD_MODAL } from '../actionTypes'

describe('actions', () => {
  describe('openAddModal', () => {
    it('should return type equal to OPEN_ADD_MODAL', () => {
      const result = openAddModal();

      expect(result.type).toEqual(OPEN_ADD_MODAL);
    });
  });
});
