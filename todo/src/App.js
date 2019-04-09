import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions'
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

class App extends Component {
  toggleTodo = e => {
    this.props.toggleTodo(e.target.id);
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList
          todos={this.props.todos}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(App);
