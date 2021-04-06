import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import { Provider } from 'react-redux';

// const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root'),
);
