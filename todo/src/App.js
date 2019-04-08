import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <input type='text' />
          <button type='submit'>Add Todo</button>
        </form>
        <ul>
          {this.props.todos.map((todo, i) => <li key={i}>{todo.value}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
