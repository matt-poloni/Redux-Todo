import React from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li
          key={todo.id}
          className={todo.completed ? 'completed' : ''}
          id={todo.id}
          onClick={props.toggleTodo}
        >
          {todo.value}
        </li>
      ))}
    </ul>
  )
}

export default TodoList;