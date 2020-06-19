import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ThunkAction } from "redux-thunk";
import {
  appReducer,
  authReducer,
  userReducer,
  deckReducer,
  localStateReducer,
  shelfReducer,
  favoritesReducer,
} from "./slices";
import * as api from "@src/api";

import { sampleState } from "./__state";

export const reduxStore = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    localState: localStateReducer,
    user: userReducer,
    deck: deckReducer,
    shelf: favoritesReducer,
    favorites: favoritesReducer,
  },
  preloadedState: sampleState,
  middleware: getDefaultMiddleware({
    thunk: {
      extraArgument: { api },
    },
  }),
});

export type AppState = ReturnType<typeof reduxStore.getState>;
export type AppThunk = ThunkAction<void, AppState, typeof api, Action<string>>;
export type AppThunkExtraArg = {
  api: typeof api;
};

// Типизированная версия useSelector
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
