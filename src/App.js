import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addCard, setCards } from './actions';
import { AddCardForm } from './components/AddCardForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { initialCard, useCard, vendors } from './hooks/useCard';
import { IsLogged } from './components/IsLogged';
import { useAccount } from './hooks/useAccount';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import React, { useEffect, useState } from 'react';

function App() {
  // login handler localstorage
  const { firstName, lastName } = useAccount();
  //destruct from useCard hook
  const { card, handleChange, resetCard } = useCard(
    initialCard,
    firstName,
    lastName,
  );
  // @ts-ignore
  const cards = useSelector((state) => state.cards);

  let [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // Save cards to localStorage
    if (isLogged) {
      localStorage.setItem(firstName + lastName, JSON.stringify(cards));
    }
  }, [cards, isLogged]);

  // submit form handler
  let save = (e) => {
    console.log('save', addCard(card), card);
    //don't add more than 4 cards
    if (cards.length <= 3) {
      dispatch(addCard(card));
    } else {
      alert('no more');
    }

    // localStorage.setItem(firstName + lastName, JSON.stringify(card));
    // Reset form
    resetCard();
    e.preventDefault();
  };
  const handleLogin = () => {
    if (localStorage.getItem(firstName + lastName)) {
      const retrievedAccount = localStorage.getItem(firstName + lastName);
      const parsedCard = JSON.parse(retrievedAccount);

      dispatch(setCards(parsedCard));
    }

    setIsLogged(true);
  };

  if (!isLogged) {
    //if isLogged = false, load login-page and insert name from API
    return (
      <Router>
        <IsLogged
          firstName={firstName}
          lastName={lastName}
          handleLogin={handleLogin}></IsLogged>
      </Router>
    );
  }

  // if isLogged = true, go to Home page
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/home'>
            <Home cards={cards} />
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
            <div className='home-container'>
              <Link to='/home' className='btn btn-primary home-btn'>
                Home
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
