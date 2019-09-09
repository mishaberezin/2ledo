import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistMiddleware } from './persist';
import rootReducer from './reducer.js';
import api from '../api';

import sampleState from './__sampleState';

const store = createStore(
  rootReducer,
  sampleState,
  applyMiddleware(thunk.withExtraArgument(api), persistMiddleware)
);

export default store;
