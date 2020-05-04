import { combineReducers } from '@reduxjs/toolkit';
import {
  appReducer,
  authReducer,
  userReducer,
  cardsReducer,
  deckReducer,
  localStateReducer,
  shelfReducer,
} from './slices';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  localState: localStateReducer,
  user: userReducer,
  cards: cardsReducer,
  deck: deckReducer,
  shelf: shelfReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
