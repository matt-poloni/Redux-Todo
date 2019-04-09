import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class TodoList extends React.Component {
  toggleTodo = id => {
    this.props.toggleTodo(id);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => this.toggleTodo(todo.id)}
          >
            {todo.value}
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList);