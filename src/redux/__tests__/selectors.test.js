import { selectShowSearchModal } from '../selectors';

describe('selectors', () => {
  describe('selectShowSearchModal', () => {
    it('should return showSearchModal as a plain value', () => {
      const showSearchModal = true;
      
      const result = selectShowSearchModal({ showSearchModal });

      expect(result).toEqual(showSearchModal);
    });
  });
});
