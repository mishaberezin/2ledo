import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { rootReducer, Store } from './reducer';
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

export type AppThunk = ThunkAction<void, Store, typeof api, Action<string>>;
