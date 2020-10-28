// index da store

import { createStore } from 'redux';
import { forms } from './reducers/reducers';

const store = createStore(
  forms,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;