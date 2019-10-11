import { SET_CURRENT_CARD } from '../types.js';
const INITIAL_STATE = {};

const localStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CARD: {
      return {
        ...state,
        currentCardId: action.payload,
      };
    }
    default:
      return state;
  }
};

export default localStateReducer;
