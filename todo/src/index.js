import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import { loadState, saveState } from './localStorage';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import App from './App';

const localState = loadState();
const store = createStore(reducer, localState);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));