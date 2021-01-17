import {
  selectDeck,
  selectSearchResults,
  selectShowSearchModal,
} from '../selectors';

describe('selectors', () => {
  describe('selectDeck', () => {
    it('should return deck exactly same with the redux state', () => {
      const deck = [
        { id: 'a1' },
        { id: 'a2' },
        { id: 'a3' },
      ];

      const result = selectDeck({ deck });

      expect(result).toHaveLength(deck.length);
      expect(result[0].id).toEqual(deck[0].id);
      expect(result[1].id).toEqual(deck[1].id);
      expect(result[2].id).toEqual(deck[2].id);
    });
  })
  
  describe('selectShowSearchModal', () => {
    it('should return showSearchModal as a plain value', () => {
      const showSearchModal = true;
      
      const result = selectShowSearchModal({ showSearchModal });

      expect(result).toEqual(showSearchModal);
    });
  });
  
  describe('selectSearchResults', () => {
    it('should return searchResults exactly same with the redux state if there is no card in deck', () => {
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

    it('should return searchResults excluded the card that exists in deck', () => {
      const searchResults = [
        { id: 'a1' },
        { id: 'a2' },
        { id: 'a3' },
      ];

      const result = selectSearchResults({ deck: [searchResults[1]], searchResults });

      expect(result).toHaveLength(searchResults.length - 1);
      expect(result[0].id).toEqual(searchResults[0].id);
      expect(result[1].id).toEqual(searchResults[2].id);
    })
  });
});
