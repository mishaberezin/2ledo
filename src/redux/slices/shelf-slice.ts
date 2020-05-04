import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { showMatchPopup } from './local-state-slice';

const shelfSlice = createSlice({
  name: 'shelf',
  initialState: {
    liked: [],
    disliked: [],
  },
  reducers: {
    addCardToLiked: (state, action: PayloadAction) => {
      state.liked.push(action.payload.card);
    },

    addCardToDisliked: (state, action: PayloadAction) => {
      state.disliked.push(action.payload.card);
    },

    addCardToArchive: (state, action: PayloadAction) => {
      const { id: cardId } = action.payload.card;

      state.liked = state.liked.filter(({ id }) => id !== cardId);
      state.disliked = state.disliked.filter(({ id }) => id !== cardId);
    },
  },
});

export const { reducer: shelfReducer } = shelfSlice;
export const {
  addCardToLiked,
  addCardToDisliked,
  addCardToArchive,
} = shelfSlice.actions;

// TODO Переделать. Нет взаимодействия с редьюсером.
export const getShelfCard = (cardId): AppThunk => async (_, getState) => {
  const state = getState();
  // make http request here
  const {
    shelf: { liked, disliked },
  } = state;
  let card = liked.find(({ id }) => cardId === id);
  if (!card) {
    card = disliked.find(({ id }) => cardId === id);
  }
  return Promise.resolve(card);
};

export const likeCard = (cardId): AppThunk => async (
  dispatch,
  getState,
  api
) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);

  if (card) {
    await api.likeCard(cardId);
    dispatch(addCardToLiked({ card }));
    dispatch(showMatchPopup({ card }));
  }
};

export const dislikeCard = (cardId): AppThunk => async (
  dispatch,
  getState,
  api
) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);

  if (card) {
    await api.dislikeCard(cardId);
    dispatch(addCardToDisliked({ card }));
  }
};

export const archiveCard = (cardId): AppThunk => async (
  dispatch,
  getState,
  api
) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);
  if (card) {
    await api.archiveCard(cardId);
    dispatch(addCardToArchive({ card }));
  }
};
