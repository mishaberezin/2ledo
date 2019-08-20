import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistMiddleware } from './persist';
import rootReducer from './reducer.js';

// Времянка. Потом из кеша будем брать.
const preloadedState = {
  app: {},
  user: {
    name: 'Misha',
  },
  profiles: [],
  cards: [],
};

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, persistMiddleware)
);

export default store;
