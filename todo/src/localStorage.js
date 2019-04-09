export const loadState = () => {
  try {
    const stateJSON = localStorage.getItem('todos');
    if (stateJSON === null) {
      return undefined;
    }
    return JSON.parse(stateJSON);
  } catch(err) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem('todos', stateJSON);
  } catch(err) {}
};