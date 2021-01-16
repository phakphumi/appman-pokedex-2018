import {
  openSearchModal,
  closeSearchModal,
  setSearchResults,
} from '../actions';
import {
  OPEN_SEARCH_MODAL,
  CLOSE_SEARCH_MODAL,
  SET_SEARCH_RESULTS,
} from '../actionTypes'

describe('actions', () => {
  describe('openSearchModal', () => {
    it('should return type equal to OPEN_SEARCH_MODAL', () => {
      const result = openSearchModal();

      expect(result.type).toEqual(OPEN_SEARCH_MODAL);
    });
  });

  describe('closeSearchModal', () => {
    it('should return type equal to CLOSE_SEARCH_MODAL', () => {
      const result = closeSearchModal();

      expect(result.type).toEqual(CLOSE_SEARCH_MODAL);
    });
  });

  describe('setSearchResults', () => {
    it('should return type equal to SET_SEARCH_RESULTS', () => {
      const result = setSearchResults();

      expect(result.type).toEqual(SET_SEARCH_RESULTS);
    });

    it('should return payload with card from prop', () => {
      const cards = [
        { id: 'a1'},
        { id: 'a2'},
        { id: 'a3'},
      ];

      const result = setSearchResults(cards);

      expect(result.payload.cards).toHaveLength(cards.length);
      expect(result.payload.cards[0].id).toEqual(cards[0].id);
      expect(result.payload.cards[1].id).toEqual(cards[1].id);
      expect(result.payload.cards[2].id).toEqual(cards[2].id);
    });
  });
});
