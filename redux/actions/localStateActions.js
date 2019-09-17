import { SET_CURRENT_CARD } from '../types.js';

export const setCurrentCard = currentCardId => {
  return {
    type: SET_CURRENT_CARD,
    payload: currentCardId,
  };
};
