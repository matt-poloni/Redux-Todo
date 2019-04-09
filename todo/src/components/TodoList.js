import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class TodoList extends React.Component {
  toggleTodo = e => {
    this.props.toggleTodo(e.target.id);
  }

  render() {
    return (
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