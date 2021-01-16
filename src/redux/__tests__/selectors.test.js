import {
  selectSearchResults,
  selectShowSearchModal,
} from '../selectors';

describe('selectors', () => {
  describe('selectShowSearchModal', () => {
    it('should return showSearchModal as a plain value', () => {
      const showSearchModal = true;
      
      const result = selectShowSearchModal({ showSearchModal });

      expect(result).toEqual(showSearchModal);
    });
  });
  
  describe('selectSearchResults', () => {
    it('should return searchResults exactly same with the redux state', () => {
      const searchResults = [
        { id: 'a1' },
        { id: 'a2' },
        { id: 'a3' },
      ];

      const result = selectSearchResults({ searchResults });

      expect(result).toHaveLength(searchResults.length);
      expect(result[0].id).toEqual(searchResults[0].id);
      expect(result[1].id).toEqual(searchResults[1].id);
      expect(result[2].id).toEqual(searchResults[2].id);
    });
  });
});
