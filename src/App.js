import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddCardForm } from './components/AddCardForm';
import { initialCard, useCard, vendors } from './hooks/useCard';
import { useAccount } from './hooks/useAccount';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IsLogged } from './components/IsLogged';
import { CardPreview } from './components/CardPreview';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from './actions';

function App() {
  const { card, handleChange, resetCard } = useCard(initialCard);

  const dispatch = useDispatch();
  // @ts-ignore
  const cards = useSelector((state) => state.cards);
  console.log('redux', cards);
  // let [cards, setCards] = useState([]);
  let [isLogged, setIsLogged] = useState(false);

  // we keep this here
  let save = (e) => {
    console.log('save', addCard(card), card);
    dispatch(addCard(card));

    // Reset form
    resetCard();
    e.preventDefault();
  };

  // dispatch(removeCard(cardId))
  // dispatch(setActive(cardId))

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
            <Link to='/home'>Home</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
