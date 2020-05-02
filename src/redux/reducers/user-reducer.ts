import { SET_USER_PROP } from '../types';

const INITIAL_STATE = {
  name: null,
  phoneNumber: null,
  profile: null,
  photo: null,
  bio: null,
  gender: null,
  age: null,
  links: null,
  token: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_PROP: {
      const { name, value } = action.payload;

      return {
        ...state,
        data: { ...state.data, [name]: value },
      };
    }
    default:
      return state;
  }
};
