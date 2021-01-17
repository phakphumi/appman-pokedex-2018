import {
  ADD_CARD_TO_DECK,
  CLOSE_SEARCH_MODAL,
  OPEN_SEARCH_MODAL,
  REMOVE_CARD_FROM_DECK,
  REMOVE_SEARCH_RESULT,
  SET_SEARCH_RESULTS
} from '../actionTypes';
import reducer from '../reducer';

describe('reducer', () => {
  describe('type: ADD_CARD_TO_DECK', () => {
    it('should push card to tail of deck array', () => {
      const card = { id: 'b2' };
      const state = reducer({ deck: [{ id: 'a1' }] }, { type: ADD_CARD_TO_DECK, payload: { card }});

      expect(state.deck[state.deck.length - 1].id).toEqual(card.id);
    });

    it('should keep the previous card as the same order', () => {
      const oldCards = [{ id: 'a1' }, { id: 'b2' }];
      const state = reducer({ deck: oldCards }, { type: ADD_CARD_TO_DECK, payload: { card: { id: 'c3' } }});

      expect(state.deck[0].id).toEqual(oldCards[0].id);
      expect(state.deck[1].id).toEqual(oldCards[1].id);
    });
  });

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

  describe('type: REMOVE_CARD_FROM_DECK', () => {
    it('should remove the selected card from deck and keep the other as the same order', () => {
      const deck = [{ id: 'a1' }, { id: 'b2' }, { id: 'c3' }];
      const state = reducer({ deck }, { type: REMOVE_CARD_FROM_DECK, payload: { cardId: deck[1].id } });

      expect(state.deck).toHaveLength(deck.length - 1);
      expect(state.deck[0].id).toEqual(deck[0].id);
      expect(state.deck[1].id).toEqual(deck[2].id);
    })
  })

  describe('type: REMOVE_SEARCH_RESULT', () => {
    it('should remove the selected card from searchResult and keep the other as the same order', () => {
      const cards = [{ id: 'a1' }, { id: 'b2' }, { id: 'c3' }];
      const state = reducer({ searchResults: cards }, { type: REMOVE_SEARCH_RESULT, payload: { cardId: cards[1].id } });

      expect(state.searchResults).toHaveLength(cards.length - 1);
      expect(state.searchResults[0].id).toEqual(cards[0].id);
      expect(state.searchResults[1].id).toEqual(cards[2].id);
    })
  })

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
