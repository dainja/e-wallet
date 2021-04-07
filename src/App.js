import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddCardForm } from './components/AddCardForm';
import { initialCard, useCard, vendors } from './hooks/useCard';
import { useAccount } from './hooks/useAccount';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IsLogged } from './components/IsLogged';
import { CardPreview } from './components/CardPreview';
import { useSelector } from 'react-redux';

function App() {
  const { card, handleChange, resetCard } = useCard(initialCard);

  let [cards, setCards] = useState([]);
  let [isLogged, setIsLogged] = useState(false);

  // we keep this here
  let save = (e) => {
    // grab existing cards and add new card last
    const nextCardsState = [...cards, card];
    console.log('nextCardsState', nextCardsState);
    setCards(nextCardsState);

    // Reset form
    resetCard();
    e.preventDefault();
  };

  const { firstName, lastName } = useAccount();

  const handleLogin = () => {
    if (localStorage.getItem('firstName') && localStorage.getItem('lastName')) {
      console.log(
        localStorage.getItem('firstName'),
        localStorage.getItem('lastName'),
      );
    }
    setIsLogged(true);
    console.log(isLogged);
  };

  if (!isLogged) {
    return (
      <Router>
        <IsLogged
          isLogged={isLogged}
          firstName={firstName}
          lastName={lastName}
          handleLogin={handleLogin}></IsLogged>
      </Router>
    );
  }

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/home'>
            {cards.length > 0 && (
              <div className='cards-home'>
                <div className='active-card'>
                  <CardPreview card={cards[0]} />
                </div>
                <div className='non-active-cards'>
                  <div className='cards-wrapper'>
                    {cards.slice(1, 5).map((_card, index) => {
                      return <CardPreview card={_card} key={index} />;
                    })}
                  </div>
                </div>
              </div>
            )}
            <Link className='btn-add-card btn btn-dark' to='/addcard'>
              Add card
            </Link>
          </Route>
          <Route path='/addcard'>
            <AddCardForm
              card={card}
              handleChange={handleChange}
              save={save}
              vendors={vendors}
            />
            <Link to='/home'>Home</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
