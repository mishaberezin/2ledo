import { combineReducers } from 'redux';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';
import profileReducer from './reducers/profileReducer';
import deckReducer from './reducers/deckReducer';
import shelfReducer from './reducers/shelfReducer';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  profile: profileReducer,
  deck: deckReducer,
  shelf: shelfReducer,
});
