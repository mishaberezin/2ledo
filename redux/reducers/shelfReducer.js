const INITIAL_STATE = {
  liked: [],
  disliked: [],
};
import { ADD_CARD_TO_LIKED, ADD_CARD_TO_DISLIKED } from '../types';

const shelfReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD_TO_LIKED: {
      return {
        ...state,
        liked: [...state.liked, action.payload.card],
      };
    }
    case ADD_CARD_TO_DISLIKED: {
      return {
        ...state,
        disliked: [...state.disliked, action.payload.card],
      };
    }
    default:
      return state;
  }
};

export default shelfReducer;
