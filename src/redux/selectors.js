export const selectDeck = state => state.deck;
export const selectSearchResults = state => {
  const cardIds = state.deck?.map(card => card?.id) || [];

  return state.searchResults?.filter(card => !cardIds.includes(card?.id));
};
export const selectShowSearchModal = state => state.showSearchModal;
