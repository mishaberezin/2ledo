const INITIAL_STATE = {
  liked: [],
  disliked: [],
  think: [],
};
import { ADD_CARD_TO_LIKED } from '../types';

const shelfReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD_TO_LIKED: {
      return {
        ...state,
        liked: [...state.liked, action.payload.card],
      };
    }
    default:
      return state;
  }
};

export default shelfReducer;
