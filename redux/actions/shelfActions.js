import api from '../../api';
import {
  ADD_CARD_TO_LIKED,
  ADD_CARD_TO_DISLIKED,
  ADD_CARD_TO_ARCHIVE,
} from '../types';

const moveCardToStatusGroup = (cardId, status) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);

  if (card) {
    const action = status === 'like' ? api.likeCard : api.dislikeCard;
    await action(cardId);
    const type = {
      like: ADD_CARD_TO_LIKED,
      dislike: ADD_CARD_TO_DISLIKED,
    }[status];
    dispatch({ type, payload: { card } });
  }
};

export const archiveCard = cardId => async (dispatch, getState) => {
  const state = getState();
  const card = state.deck.find(({ id }) => cardId === id);
  if (card) {
    await api.archiveCard(cardId);
    dispatch({ type: ADD_CARD_TO_ARCHIVE, payload: { card } });
  }
};

export const getShelfCard = cardId => async (_, getState) => {
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

export const likeCard = cardId => moveCardToStatusGroup(cardId, 'like');
export const dislikeCard = cardId => moveCardToStatusGroup(cardId, 'dislike');
