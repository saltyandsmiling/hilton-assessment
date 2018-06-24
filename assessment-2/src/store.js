import { createStore } from 'redux';
import { loadState } from './loadState';
import reducers from './reducers/index';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
);

export default store;
