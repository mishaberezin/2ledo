import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

type Apartment = {
  id: string;
  data: any;
};

type Card = {
  id: number;
  type: string;
  apartment: Apartment;
};

export const requestCards = createAsyncThunk(
  "deck/requestCards",
  async (arg, { extra: { api } }) => {
    const cards = await api.fetchCards();
    return cards;
  }
);

const deckSlice = createSlice({
  name: "deck",
  initialState: [],
  reducers: {
    // setDeckCards: (state, action: PayloadAction<{ cards: Card[] }>) => {
    //   state.push(...action.payload.cards);
    // },
  },
  extraReducers: {
    [requestCards.fulfilled.type]: (state, action) => {
      return action.payload;
    },
  },
});

export const { reducer: deckReducer } = deckSlice;
// export const { setDeckCards } = deckSlice.actions;
