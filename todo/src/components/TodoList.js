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
            onClick={() => this.toggleTodo(todo.id)}
          >
            <span
              className={todo.completed ? 'completed' : ''}
            >
              {todo.value}
            </span>
            <button>
              Delete
            </button>
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