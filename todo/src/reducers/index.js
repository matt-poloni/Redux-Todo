import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      value: 'Walk the dog.',
      completed: false
    }
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
            id: Date.now(),
            value: action.payload,
            completed: false,
          },
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return `${todo.id}` === action.payload
            ? ({
                ...todo,
                completed: !todo.completed,
              })
            : todo;
          }
        )
      }
    default:
      return state
  }
}

export default rootReducer;