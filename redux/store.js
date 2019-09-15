import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistMiddleware } from './persist';
import rootReducer from './reducer.js';
import api from '../api';

import sampleState from './__sampleState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  sampleState,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(api), persistMiddleware)
  )
);

export default store;
