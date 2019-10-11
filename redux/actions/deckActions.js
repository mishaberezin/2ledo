import api from '../../api';
import { SET_DECK_CARDS } from '../types';

export const requestCards = (offset, limit = 10) => async dispatch => {
  const cards = await api.fetchCards(offset, limit);
  dispatch({
    type: SET_DECK_CARDS,
    payload: { cards },
  });
  return cards;
};
