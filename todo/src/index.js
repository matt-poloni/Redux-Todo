import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const dummyReducer = () => {
  return { 
    todos: [
      {
        value: 'Walk the dog.',
        completed: false
      }
    ]
  }
}

ReactDOM.render(
  <Provider store={createStore(dummyReducer)}>
    <App />
  </Provider>,
  document.getElementById('root'));