import { useState } from 'react';

export function useCard(initialCard) {
  let [card, setCard] = useState(initialCard);

  let handleChange = (e) => {
    // deconstruct wanted properties from e.target
    let { name, value, type } = e.target;
    if (name === 'cardNumber') {
      value = value
        .replace(/[^\dA-Z]/g, '')
        .slice(0, 16)
        .replace(/(.{4})/g, '$1 ')
        .trim();
    }

    if (name === 'validThrough') {
      value = value
        .replace(/^(\d\d)(\d)$/g, '$1/$2')
        .replace(/^(\d\d\/\d\d)(\d+)$/g, '$1/$2')
        .replace(/[^\d\/]/g, '')
        .slice(0, 5);
    }

    if (name === 'cvc') {
      value = value.slice(0, 3);
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
  cardNumber: '',
  cardFirstName: '',
  cardLastName: '',
  validThrough: '',
  cvc: '',
  vendor: vendors[0],
};
