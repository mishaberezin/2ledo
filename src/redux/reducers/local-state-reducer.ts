import {
  SET_CURRENT_CARD,
  SET_MATCH_INDICATOR,
  SHOW_MATCH_POPUP,
  HIDE_MATCH_POPUP,
} from '../types';
const INITIAL_STATE = {
  matchIndicator: false,
  matchPopup: {
    visible: false,
    card: null,
  },
};

export const localStateReducer = (state = INITIAL_STATE, action) => {
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
    case SHOW_MATCH_POPUP: {
      return {
        ...state,
        matchPopup: {
          visible: true,
          card: action.payload.card,
        },
      };
    }
    case HIDE_MATCH_POPUP: {
      return {
        ...state,
        matchPopup: {
          visible: false,
          card: null,
        },
      };
    }
    default:
      return state;
  }
};
