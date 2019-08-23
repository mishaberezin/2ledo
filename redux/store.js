import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistMiddleware } from './persist';
import rootReducer from './reducer.js';
import api from '../api';

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
  applyMiddleware(thunk.withExtraArgument(api), persistMiddleware)
);

export default store;
