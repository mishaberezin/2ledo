import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  appReducer,
  authReducer,
  userReducer,
  cardsReducer,
  deckReducer,
  localStateReducer,
  shelfReducer,
} from './slices';
import * as api from '@src/api';

import { sampleState } from './__state';

export const reduxStore = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    localState: localStateReducer,
    user: userReducer,
    cards: cardsReducer,
    deck: deckReducer,
    shelf: shelfReducer,
  },
  preloadedState: sampleState,
  middleware: getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

export type AppState = ReturnType<typeof reduxStore.getState>;
export type AppThunk = ThunkAction<void, AppState, typeof api, Action<string>>;
