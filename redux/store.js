import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistMiddleware } from './persist';
import rootReducer from './reducer.js';
import api from '../api';

import preloadedState from './__preloadedState';

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk.withExtraArgument(api), persistMiddleware)
);

export default store;
