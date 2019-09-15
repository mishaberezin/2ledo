import { SET_CARD_PRICE } from '../types.js';
import { SET_CARD_NUMBER_OF_PEOPLE } from '../types.js';
import { SET_CARD_DESCRIPTION } from '../types.js';

export const setCardPrice = ({ id, value }) => ({
  type: SET_CARD_PRICE,
  payload: {
    id,
    value,
  },
});

export const setCardNumberOfPeople = ({ id, value }) => ({
  type: SET_CARD_NUMBER_OF_PEOPLE,
  payload: {
    id,
    value,
  },
});

export const setCardDescription = ({ id, value }) => ({
  type: SET_CARD_DESCRIPTION,
  payload: {
    id,
    value,
  },
});
