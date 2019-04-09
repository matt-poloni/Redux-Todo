import { ADD_TODO, TOGGLE_TODO } from '../actions';

let nextID = 2;
const initialState = {
  todos: [
    {
      id: 0,
      value: 'Prepopulated, Not Complete',
      completed: false,
    },
    {
      id: 1,
      value: 'Prepopulated, Complete',
      completed: true,
    },
  ]
}

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextID++,
            value: action.payload,
            completed: false,
          },
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload
            ? ({
                ...todo,
                completed: !todo.completed,
              })
            : todo;
          }
        )
      };
    default:
      return state
  }
}

export default rootReducer;