import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import { loadState, saveState } from './localStorage';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './App';

const localState = loadState();
const store = createStore(
  rootReducer,
  localState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));