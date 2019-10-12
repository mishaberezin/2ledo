import {
  SET_CARD_PRICE,
  SET_CARD_PROP,
  SET_DECK_CARDS,
  ADD_CARD_PHOTO,
} from '../types';

export const setCardPrice = ({ id, value }) => ({
  type: SET_CARD_PRICE,
  payload: {
    id,
    value,
  },
});

export const addCardPhoto = ({ id, photo }) => ({
  type: ADD_CARD_PHOTO,
  payload: {
    id,
    photo,
  },
});

export const setCardProp = ({ id, name, value }) => ({
  type: SET_CARD_PROP,
  payload: {
    id,
    name,
    value,
  },
});

export const requestCards = (offset, limit = 10) => async (
  dispatch,
  getState,
  api
) => {
  const cards = await api.fetchCards(offset, limit);
  dispatch({
    type: SET_DECK_CARDS,
    payload: { cards },
  });
  return cards;
};
