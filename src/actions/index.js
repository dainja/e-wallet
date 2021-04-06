import { vendors } from '../hooks/useCard';

export const addCard = () => ({
  type: 'ADD_TODO',
  cardNumber: '',
  cardFirstName: '',
  cardLastName: '',
  validThrough: '',
  cvc: '',
  vendor: vendors[0],
});
