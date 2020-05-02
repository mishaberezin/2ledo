import { SET_USER_TOKEN } from '../types';

const INITIAL_STATE = {
  token: null,
  isWarmedUp: false,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'APP_ASSETS_LOADED': {
      return { ...state, isWarmedUp: true };
    }
    case SET_USER_TOKEN: {
      return { ...state, token: action.payload.token };
    }
    case 'SET_SERP_LOADING': {
      return { ...state, serpLoading: action.payload };
    }
    default:
      return state;
  }
};
