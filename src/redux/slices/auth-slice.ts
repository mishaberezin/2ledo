import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { isAuthorized, removeToken } from "@src/api/token-storage";

export enum AuthStatus {
  PENDING = "PENDING",
  AUTHORIZED = "AUTHORIZED",
  NOT_AUTHORIZED = "NOT_AUTHORIZED",
}

export const resolveAuth = createAsyncThunk(
  "auth/resolve",
  async (props, thunk) => {
    const { api } = thunk.extra;
    try {
      if (await isAuthorized()) {
        return true;
      }

      await api.loginByApplicationId();

      return true;
    } catch (err) {
      return false;
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (props, thunk) => {
  await removeToken();
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: AuthStatus.PENDING,
  },
  reducers: {
    setAuthStatus(state, action: PayloadAction<AuthStatus>) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [resolveAuth.pending.type]: (state) => {
      state.status = AuthStatus.PENDING;
    },
    [resolveAuth.fulfilled.type]: (state, action) => {
      const { payload } = action;

      if (payload === true) {
        state.status = AuthStatus.AUTHORIZED;
      } else {
        state.status = AuthStatus.NOT_AUTHORIZED;
      }
    },
    [resolveAuth.rejected.type]: (state) => {
      state.status = AuthStatus.NOT_AUTHORIZED;
    },
    [logOut.fulfilled.type]: (state) => {
      state.status = AuthStatus.NOT_AUTHORIZED;
    },
  },
});

export const { reducer: authReducer } = authSlice;
export const { setAuthStatus } = authSlice.actions;
