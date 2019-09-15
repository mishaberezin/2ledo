import { SET_CURRENT_CARD } from '../types.js';

export const setCurrentCard = currentCardId => {
  // debugger;
  return {
    type: SET_CURRENT_CARD,
    payload: currentCardId,
  };
};
