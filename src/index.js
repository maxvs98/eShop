import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import createStore from './store';
const store = createStore();

setTimeout(function() {
  store.dispatch({
    type: 'SET_PRODUCTS',
    payload: [
      {
        id: 0,
        title: 'T-shirt',
        description: 'red',
        price: 0.99
      }
    ]
  });
}, 1000);

ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
