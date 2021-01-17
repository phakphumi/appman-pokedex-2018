import {
  addCardToDeck,
  closeSearchModal,
  openSearchModal,
  removeCardFromDeck,
  removeSearchResult,
  setSearchResults,
} from '../actions';
import {
  ADD_CARD_TO_DECK,
  CLOSE_SEARCH_MODAL,
  OPEN_SEARCH_MODAL,
  REMOVE_CARD_FROM_DECK,
  REMOVE_SEARCH_RESULT,
  SET_SEARCH_RESULTS,
} from '../actionTypes'

describe('actions', () => {
  describe('addCardToDeck', () => {
    it('should return type equal to ADD_CARD_TO_DECK', () => {
      const result = addCardToDeck();

      expect(result.type).toEqual(ADD_CARD_TO_DECK);
    });

    it('should return payload which contains the input card', () => {
      const card = { id: 'a1' };
      const result = addCardToDeck(card);

      expect(result.payload.card.id).toEqual(card.id);
    });
  });

  describe('closeSearchModal', () => {
    it('should return type equal to CLOSE_SEARCH_MODAL', () => {
      const result = closeSearchModal();

      expect(result.type).toEqual(CLOSE_SEARCH_MODAL);
    });
  });

  describe('openSearchModal', () => {
    it('should return type equal to OPEN_SEARCH_MODAL', () => {
      const result = openSearchModal();

      expect(result.type).toEqual(OPEN_SEARCH_MODAL);
    });
  });

  describe('removeCardFromDeck', () => {
    it('should return type equal to REMOVE_CARD_FROM_DECK', () => {
      const result = removeCardFromDeck();

      expect(result.type).toEqual(REMOVE_CARD_FROM_DECK);
    });

    it('should return payload which contains cardId input', () => {
      const cardId = 'a1';
      const result = removeCardFromDeck(cardId);

      expect(result.payload.cardId).toEqual(cardId);
    });
  });

  describe('removeSearchResult', () => {
    it('should return type equal to REMOVE_SEARCH_RESULT', () => {
      const result = removeSearchResult();

      expect(result.type).toEqual(REMOVE_SEARCH_RESULT);
    });

    it('should return payload which contains cardId input', () => {
      const cardId = 'a1';
      const result = removeSearchResult(cardId);

      expect(result.payload.cardId).toEqual(cardId);
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
