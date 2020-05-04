import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

const deckSlice = createSlice({
  name: 'deck',
  initialState: [],
  reducers: {
    setDeckCards: (state, action: PayloadAction) => {
      state.push(...action.payload.cards);
    },
  },
});

export const { reducer: deckReducer } = deckSlice;
export const { setDeckCards } = deckSlice.actions;

export const requestCards = (offset, limit = 10): AppThunk => async (
  dispatch,
  getState,
  api
) => {
  const cards = await api.fetchCards(offset, limit);
  dispatch(setDeckCards({ cards }));
  return cards; // TODO: Зачем?
};
