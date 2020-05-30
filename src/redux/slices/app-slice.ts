import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isAppLoading: true,
    serpLoading: false,
  },
  reducers: {
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.isAppLoading = action.payload;
    },
    setSerpLoading(state, action: PayloadAction<boolean>) {
      state.serpLoading = action.payload;
    },
  },
});

export const { reducer: appReducer } = appSlice;
export const { setAppLoading, setSerpLoading } = appSlice.actions;
