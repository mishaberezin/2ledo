import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { isAuthorized, removeToken, storeToken } from '@src/api/token-storage';
import { AppThunk } from '../store';

export enum AuthStatus {
  PENDING,
  AUTHORIZED,
  NOT_AUTHORIZED,
}

export const logIn = createAsyncThunk('auth/logIn', async (props, thunk) => {
  const { extra: api } = thunk;
  const { phone } = props;
  const { token } = await api.logIn({ phone });

  await storeToken(token);
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: AuthStatus.PENDING,
    isAuthorized: AuthStatus.PENDING,
  },
  reducers: {
    setAuthStatus(state, action: PayloadAction<AuthStatus>) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [logIn.fulfilled.type]: (state) => {
      state.status = AuthStatus.AUTHORIZED;
    },
  },
});

export const { reducer: authReducer } = authSlice;
export const { setAuthStatus } = authSlice.actions;

export const restoreAuth = () => async (dispatch) => {
  const isTokenExists = await isAuthorized();

  if (isTokenExists) {
    dispatch(setAuthStatus(AuthStatus.AUTHORIZED));
  } else {
    dispatch(setAuthStatus(AuthStatus.NOT_AUTHORIZED));
  }
};

// export const logIn = (props): AppThunk => async (dispatch, getState, api) => {
//   const { phone } = props;
//   const { token } = await api.logIn({ phone });

//   await storeToken(token);
//   dispatch(setAuthStatus(AuthStatus.AUTHORIZED));
// };

export const logOut = (): AppThunk => async (dispatch) => {
  await removeToken();
  dispatch(setAuthStatus(AuthStatus.NOT_AUTHORIZED));
};
