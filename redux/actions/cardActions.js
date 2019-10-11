import {
  SET_CARD_PRICE,
  SET_CARD_NUMBER_OF_PEOPLE,
  SET_CARD_DESCRIPTION,
  SET_CARD_PROP,
} from '../types';

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

export const setCardProp = ({ id, name, value }) => ({
  type: SET_CARD_PROP,
  payload: {
    id,
    name,
    value,
  },
});
