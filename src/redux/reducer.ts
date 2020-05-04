import { combineReducers } from '@reduxjs/toolkit';
import { appReducer, authReducer } from './slices';

import { localStateReducer } from './reducers/local-state-reducer';
import { userReducer } from './reducers/user-reducer';
import { cardsReducer } from './reducers/cards-reducer';
import { deckReducer } from './reducers/deck-reducer';
import { shelfReducer } from './reducers/shelf-reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  localState: localStateReducer,
  user: userReducer,
  cards: cardsReducer,
  deck: deckReducer,
  shelf: shelfReducer,
});

export type Store = ReturnType<typeof rootReducer>;
