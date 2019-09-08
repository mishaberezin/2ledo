import { SET_CARD_TUNE_PRICE } from '../types.js';

export const setCardTunePrice = cardTunePrice => ({
  type: SET_CARD_TUNE_PRICE,
  payload: cardTunePrice,
});
