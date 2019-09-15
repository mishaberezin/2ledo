import { SET_CURRENT_CARD } from '../types.js';
const INITIAL_STATE = {};

const localStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CARD: {
      console.log(SET_CURRENT_CARD);
      console.log(action.payload);

      return {
        ...state,
        currentCard: action.payload,
      };
    }
    default:
      return state;
  }
};

export default localStateReducer;
