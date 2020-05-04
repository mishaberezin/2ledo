import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {},
  reducers: {
    addCard(state, action: PayloadAction) {
      const { id, value } = action.payload;
      state[id] = value;
    },
    setCardProp(state, action: PayloadAction) {
      const { id, name, value } = action.payload;
      const card = (state[id].data[name] = value);
    },
  },
});

export const { reducer: cardsReducer } = cardsSlice;
export const { addCard, setCardProp } = cardsSlice.actions;
