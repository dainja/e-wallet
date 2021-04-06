import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddCardForm } from './components/AddCardForm';
import { initialCard, useCard, vendors } from './hooks/useCard';

function App() {
  const { card, handleChange, resetCard } = useCard(initialCard);

  let [cards, setCards] = useState([]);

  let save = (e) => {
    // grab existing cards and add new card last
    const nextCardsState = [...cards, card];
    console.log('nextCardsState', nextCardsState);
    setCards(nextCardsState);
    // Reset form
    // setCard(initialCard);
    resetCard();
    e.preventDefault();
  };

  return (
    <div className='App'>
      <AddCardForm
        card={card}
        handleChange={handleChange}
        save={save}
        vendors={vendors}
      />
    </div>
  );
}

export default App;
