import api from '../../api';
import { ADD_CARD_TO_LIKED, ADD_CARD_TO_DISLIKED } from '../types';

const shelfCard = (cardId, status) => async (dispatch, getState) => {
  const state = getState();
  await api.likeCard(cardId);

  const card = state.deck.find(({ id }) => cardId === id);
  if (card) {
    dispatch({
      type: status === 'like' ? ADD_CARD_TO_LIKED : ADD_CARD_TO_DISLIKED,
      payload: { card },
    });
  }
};

export const getShelfCard = cardId => async (_, getState) => {
  const state = getState();
  // make http request here
  const {
    shelf: { liked, dislicked },
  } = state;
  let card = liked.find(({ id }) => cardId === id);
  if (!card) {
    card = dislicked.find(({ id }) => cardId === id);
  }
  return Promise.resolve(card);
};

export const likeCard = cardId => shelfCard(cardId, 'like');
export const dislikeCard = cardId => shelfCard(cardId, 'dislike');
