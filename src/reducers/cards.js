import { vendors } from '../hooks/useCard';

const generateId = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 9);
};

const initialCardState = [
  {
    id: '1',
    cardNumber: '1234456712345678',
    cardFirstName: 'Daniel',
    cardLastName: 'Naja',
    validThrough: '12/22',
    cvc: '123',
    vendor: vendors[0],
    active: true,
  },
  {
    id: '2',
    cardNumber: '1234456712345678',
    cardFirstName: 'Daniel',
    cardLastName: 'Naja',
    validThrough: '12/22',
    cvc: '123',
    vendor: vendors[0],
    active: false,
  },
];

const cards = (state = initialCardState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      console.log('action.payload', action);
      action.payload.id = generateId();
      action.payload.active = false;
      return [...state, action.payload];

    case 'REMOVE_CARD':
      return state.filter((card) => card.id !== action.payload);

    case 'SET_ACTIVE':
      return state.map((card) => ({
        ...card,
        active: action.payload === card.id,
      }));
    default:
      return state;
  }
};

export default cards;
