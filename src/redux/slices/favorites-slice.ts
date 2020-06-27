import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { AppState, AppThunkExtraArg } from "@src/redux/store";

export enum FavoritesStatus {
  PENDING = "PENDING",
  FINISHED = "FINISHED",
  UNFINISHED = "UNFINISHED",
}

export type ApartmentData = {
  title: string;
  description: string;
  rentalPrice: number;
  roomsCount: number;
  floor: number;
  photos: any[];
  address: { oneLine: string; lat: number; lon: number };
};

export type ApartmentFavoriteCard = {
  id: string;
  type: "APARTMENT";
  apartment: {
    id: string;
    data: ApartmentData;
  };
};

export const fetchFavoritesCards = createAsyncThunk<
  ApartmentFavoriteCard[],
  void,
  {
    extra: AppThunkExtraArg;
  }
>("fetchFavoritesCards", async (arg, thunk) => {
  const { api } = thunk.extra;
  return await api.fetchFavoritesCards();
});

const favoritesAdapter = createEntityAdapter<ApartmentFavoriteCard>();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesAdapter.getInitialState({
    status: FavoritesStatus.UNFINISHED,
    lastFetchedAt: 0,
  }),
  reducers: {},
  extraReducers: {
    [fetchFavoritesCards.pending.type]: (state) => {
      state.status = FavoritesStatus.PENDING;
    },
    [fetchFavoritesCards.fulfilled.type]: (state, action) => {
      const favorites = action.payload;
      state.status = FavoritesStatus.FINISHED;
      favoritesAdapter.upsertMany(state, favorites);
      state.lastFetchedAt = Date.now();
    },
    [fetchFavoritesCards.rejected.type]: (state) => {
      state.status = FavoritesStatus.UNFINISHED;
      state.lastFetchedAt = Date.now();
    },
  },
});

export const { reducer: favoritesReducer } = favoritesSlice;
export const {
  selectById: selectFavoriteCardById,
  //selectIds: selectFavoriteCardIds,
  // selectEntities: selectFavoriteCardEntities,
  selectAll: selectAllFavoriteCards,
  // selectTotal: selectTotalFavoriteCards,
} = favoritesAdapter.getSelectors<AppState>((state) => state.favorites);
