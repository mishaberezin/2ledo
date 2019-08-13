import { SET_USER_NAME, SET_USER_PHOTO } from '../types.js';

const INITIAL_STATE = {
  name: null,
  phone: null,
  photo: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      return { ...state, name: action.payload };
    }
    case SET_USER_PHOTO: {
      return { ...state, photo: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
