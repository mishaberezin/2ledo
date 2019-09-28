import { SET_USER_TOKEN } from '../types';

const INITIAL_STATE = {
  token: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return { ...state, token: action.payload.token };
    }
    default:
      return state;
  }
};

export default appReducer;
