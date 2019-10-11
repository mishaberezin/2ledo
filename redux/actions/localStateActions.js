import { SET_CURRENT_CARD } from '../types.js';

export const setCurrentCardId = currentCardId => {
  return {
    type: SET_CURRENT_CARD,
    payload: currentCardId,
  };
};
