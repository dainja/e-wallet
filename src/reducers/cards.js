import { vendors } from '../hooks/useCard';

const generateId = function () {
  return Math.random().toString(36).substr(2, 9);
};

const initialCardState = [
  {
    id: generateId(),
    cardNumber: '1234 4567 1234 5678',
    cardFirstName: 'Daniel',
    cardLastName: 'Naja',
    validThrough: '12/22',
    cvc: '123',
    vendor: vendors[0],
    active: true,
  },
];

const cards = (state = initialCardState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      action.payload.id = generateId();
      action.payload.active = false;
      return [...state, action.payload];

    case 'SET_CARDS':
      return action.payload;

    case 'REMOVE_CARD':
      return state.filter((card) => card !== action.payload);

    case 'SET_ACTIVE':
      const cardId = action.payload.id;
      return state.map((card) => ({
        ...card,
        // Set active to true if current card id matches payload
        active: card.id === cardId,
      }));

    default:
      return state;
  }
};

export default cards;
