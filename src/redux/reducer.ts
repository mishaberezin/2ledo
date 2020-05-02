import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth-reducer';
import { appReducer } from './reducers/app-reducer';
import { localStateReducer } from './reducers/local-state-reducer';
import { userReducer } from './reducers/user-reducer';
import { cardsReducer } from './reducers/cards-reducer';
import { deckReducer } from './reducers/deck-reducer';
import { shelfReducer } from './reducers/shelf-reducer';
import { chatbotReducer } from './reducers/chatbot-reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  localState: localStateReducer,
  user: userReducer,
  cards: cardsReducer,
  deck: deckReducer,
  shelf: shelfReducer,
  chatbot: chatbotReducer,
});
