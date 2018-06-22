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

export const saveState = (state) => {
  try {
    const serialzedState = JSON.stringify(state);
    localStorage.setItem('roomState', serialzedState);
  } catch (err) {
    // Ignore err
  }
}
