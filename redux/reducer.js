import { combineReducers } from 'redux';
import appReducer from './reducers/appReducer.js';
import userReducer from './reducers/userReducer.js';
import profilesReducer from './reducers/profilesReducer.js';
import cardsReducer from './reducers/cardsReducer.js';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  profiles: profilesReducer,
  cards: cardsReducer,
});
