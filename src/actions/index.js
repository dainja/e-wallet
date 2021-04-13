export const addCard = (card) => ({
  type: 'ADD_CARD',
  payload: card,
});

export const setCards = (cards) => ({
  type: 'SET_CARDS',
  payload: cards,
});

export const removeCard = (cardId) => ({
  type: 'REMOVE_CARD',
  payload: cardId,
});

export const setActive = (card) => ({
  type: 'SET_ACTIVE',
  payload: card,
});
