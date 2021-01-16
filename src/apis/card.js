export const searchCard = async (searchTerm) => {
  if (!searchTerm) {
    try {
      const response = await fetch('http://localhost:3030/api/cards?limit=20');
      const result = await response?.json() || [];
      return result?.cards;
    } catch {
      return [];
    }
  }

  try {
    const responseByName = await fetch(`http://localhost:3030/api/cards?limit=10&name=${searchTerm}`);
    const responseByType = await fetch(`http://localhost:3030/api/cards?limit=10&type=${searchTerm}`);
    const resultsByName = await responseByName?.json() || [];
    const resultsByType = await responseByType?.json() || [];
  
    const cardByNameIds = resultsByName?.cards?.map(card => card?.id);
    const uniqueCardsByType = resultsByType?.cards?.filter(card => !cardByNameIds?.includes(card?.id))
  
    return [...resultsByName?.cards, ...uniqueCardsByType];
  } catch {
    return [];
  }
};
