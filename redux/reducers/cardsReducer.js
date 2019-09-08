import { ADD_CARD, SET_CARD_TUNE_PRICE } from '../types.js';

const INITIAL_STATE = {};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case SET_CARD_TUNE_PRICE: {
      const card = state[action.payload.id];
      return {
        ...state,
        [action.payload.id]: { ...card, price: action.payload.value },
      };
    }
    default:
      return state;
  }
};

export default cardsReducer;
