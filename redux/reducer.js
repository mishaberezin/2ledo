import { combineReducers } from 'redux';
import appReducer from './reducers/appReducer';
import localStateReducer from './reducers/localStateReducer';
import userReducer from './reducers/userReducer';
import cardsReducer from './reducers/cardsReducer';
import deckReducer from './reducers/deckReducer';
import shelfReducer from './reducers/shelfReducer';

export default combineReducers({
  app: appReducer,
  localState: localStateReducer,
  user: userReducer,
  cards: cardsReducer,
  deck: deckReducer,
  shelf: shelfReducer,
});
