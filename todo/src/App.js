import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions'
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: '' })
  };

  toggleTodo = e => {
    this.props.toggleTodo(e.target.id);
  }

  render() {
    return (
      <div className="App">
        <form
          onSubmit={this.addTodo}
        >
          <input
            type='text'
            name='newTodoText'
            value={this.state.newTodoText}
            onChange={this.handleChanges}
          />
          <button type='submit'>Add Todo</button>
        </form>
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
