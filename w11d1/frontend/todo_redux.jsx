import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');

  const addLoggingToDispatch = store => {
    let dispatch = store.dispatch()
    return (action) => {
      console.log(store.getState())
      console.log(action)
      dispatch(action)
      console.log(store.getState())
    }
  }

  ReactDOM.render(<Root store={store} />, root);
});
