import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { rootReducer, AppState } from './reducer';
import * as api from '@src/api';

import { sampleState } from './__state';

export const reduxStore = configureStore({
  reducer: rootReducer,
  preloadedState: sampleState,
  middleware: getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

export type AppThunk = ThunkAction<void, AppState, typeof api, Action<string>>;
