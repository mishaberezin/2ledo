import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    phoneNumber: null,
    profile: null,
    photo: null,
    bio: null,
    gender: null,
    age: null,
    links: null,
    token: null,
  },
  reducers: {
    setUserProp(state, action: PayloadAction) {
      const { name, value } = action.payload;
      state.data[name] = value;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { setUserProp } = userSlice.actions;
