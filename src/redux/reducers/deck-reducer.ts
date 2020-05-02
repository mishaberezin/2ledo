import { SET_DECK_CARDS } from '../types';

const INITIAL_STATE = [];

export const deckReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DECK_CARDS: {
      return [...state, ...action.payload.cards];
    }
    default:
      return state;
  }
};
