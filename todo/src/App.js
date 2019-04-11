import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = props => {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList/>
    </div>
  )
}

export default App;
