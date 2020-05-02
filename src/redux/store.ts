import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
import * as api from '@src/api';

import { sampleState } from './__state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reduxStore = createStore(
  rootReducer,
  sampleState,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api))),
);
