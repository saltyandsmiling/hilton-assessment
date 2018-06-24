
// checks local storage for persisted state
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('roomState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// saves app state via local storage api
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('roomState', serializedState);
  } catch (err) {
    // Ignore err
  }
};
