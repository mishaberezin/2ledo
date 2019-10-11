import api from '../../api';
import { ADD_CARD_TO_LIKED } from '../types';

export const likeCard = cardId => async (dispatch, getState) => {
  const state = getState();
  await api.likeCard(cardId);

  const card = state.deck.find(({ id }) => cardId === id);
  if (card) {
    dispatch({
      type: ADD_CARD_TO_LIKED,
      payload: { card },
    });
  }
};
