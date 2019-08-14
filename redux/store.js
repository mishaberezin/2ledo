import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistMiddleware } from './persist';
import rootReducer from './reducers/index.js';

const preloadedState = {
  user: {
    name: 'Misha'
  }
};

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, persistMiddleware)
);

export default store;
