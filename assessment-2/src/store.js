import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../loadState';

import reducers from './reducers/index';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
