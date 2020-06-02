import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { AppState, AppThunkExtraArg } from "@src/redux/store";
import { MAX_CARDS_PER_FETCH } from "@src/api/deck";

export enum DeckStatus {
  PENDING = "PENDING",
  FINISHED = "FINISHED",
  UNFINISHED = "UNFINISHED",
}

export type ApartmentCard = {
  id: string;
  type: "APARTMENT";
  apartment: {
    id: string;
    data: {
      title: string;
      description: string;
      rentalPrice: number;
      roomsCount: number;
      floor: number;
      photos: any[];
      address: { oneLine: string; lat: number; lon: number };
    };
  };
};

export const fetchCards = createAsyncThunk<
  ApartmentCard[],
  void,
  {
    extra: AppThunkExtraArg;
  }
>("fetchCards", async (arg, thunk) => {
  const { api } = thunk.extra;
  return await api.fetchCards();
});

export const likeCard = createAsyncThunk<
  void,
  string,
  {
    extra: AppThunkExtraArg;
  }
>("likeCard", async (cardId, thunk) => {
  const { api } = thunk.extra;
  await api.likeCard(cardId);
});

export const dislikeCard = createAsyncThunk<
  void,
  string,
  {
    extra: AppThunkExtraArg;
  }
>("likeCard", async (cardId, thunk) => {
  const { api } = thunk.extra;
  await api.dislikeCard(cardId);
});

const deckAdapter = createEntityAdapter<ApartmentCard>();

const deckSlice = createSlice({
  name: "deck",
  initialState: deckAdapter.getInitialState({
    status: DeckStatus.UNFINISHED,
    lastFetchedAt: 0,
  }),
  reducers: {},
  extraReducers: {
    [fetchCards.pending.type]: (state) => {
      state.status = DeckStatus.PENDING;
    },
    [fetchCards.fulfilled.type]: (state, action) => {
      const cards = action.payload;

      if (cards.length < MAX_CARDS_PER_FETCH) {
        state.status = DeckStatus.FINISHED;
      } else {
        state.status = DeckStatus.UNFINISHED;
      }

      deckAdapter.upsertMany(state, cards);
      state.lastFetchedAt = Date.now();
    },
    [fetchCards.rejected.type]: (state) => {
      state.status = DeckStatus.UNFINISHED;
      state.lastFetchedAt = Date.now();
    },
  },
});

export const { reducer: deckReducer } = deckSlice;
export const {
  selectById: selectCardById,
  selectIds: selectCardIds,
  selectEntities: selectCardEntities,
  selectAll: selectAllCards,
  selectTotal: selectTotalCards,
} = deckAdapter.getSelectors<AppState>((state) => state.deck);
