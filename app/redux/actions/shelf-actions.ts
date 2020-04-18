import {
  ADD_CARD_TO_LIKED,
  ADD_CARD_TO_DISLIKED,
  ADD_CARD_TO_ARCHIVE,
  SHOW_MATCH_POPUP,
} from '../types';

export const getShelfCard = (cardId) => async (_, getState) => {
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

export const likeCard = (cardId) => async (dispatch, getState, api) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);

  if (card) {
    /* const result =  */ await api.likeCard(cardId);
    dispatch({ type: ADD_CARD_TO_LIKED, payload: { card } });
    dispatch({ type: SHOW_MATCH_POPUP, payload: { card } });
  }
};

export const dislikeCard = (cardId) => async (dispatch, getState, api) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);

  if (card) {
    await api.dislikeCard(cardId);
    dispatch({ type: ADD_CARD_TO_DISLIKED, payload: { card } });
  }
};

export const archiveCard = (cardId) => async (dispatch, getState, api) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);
  if (card) {
    await api.archiveCard(cardId);
    dispatch({ type: ADD_CARD_TO_ARCHIVE, payload: { card } });
  }
};
