import { SET_CURRENT_CARD, SET_MATCH_INDICATOR } from '../types.js';
const INITIAL_STATE = {
  matchIndicator: false,
};

const localStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CARD: {
      return {
        ...state,
        currentCardId: action.payload,
      };
    }
    case SET_MATCH_INDICATOR: {
      return {
        ...state,
        matchIndicator: action.payload,
      };
    }
    default:
      return state;
  }
};

export default localStateReducer;
