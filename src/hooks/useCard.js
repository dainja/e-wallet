import { useState } from 'react';

export function useCard(initialCard) {
  let [card, setCard] = useState(initialCard);

  let handleChange = (e) => {
    // deconstruct wanted properties from e.target
    let { name, value, type } = e.target;

    if (type === 'number') {
      // change value from string to number
      value = Number(value);
    }
    const nextCardState = {
      // send in all the properties
      ...card,
      // set new value for property for targeted input
      [name]: value,
    };
    // update state
    setCard(nextCardState);
  };

  const resetCard = (e) => {
    setCard(initialCard);
  };

  return { card, handleChange, resetCard };
}

export const vendors = ['Bitcoin', 'MasterCard', 'Visa', 'Other'];

export const initialCard = {
  cardNumber: undefined,
  cardFirstName: '',
  cardLastName: '',
  validThrough: undefined,
  cvc: undefined,
  vendor: vendors[0],
};
