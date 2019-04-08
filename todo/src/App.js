import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions'

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
    console.log(this.props.todos);
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
        <ul>
          {this.props.todos.map(todo => (
            <li
              key={todo.id}
              className={todo.completed ? 'completed' : ''}
              id={todo.id}
              onClick={this.toggleTodo}
            >
              {todo.value}
            </li>
          ))}
        </ul>
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
