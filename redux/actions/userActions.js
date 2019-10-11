import {
  SET_USER_PROP,
  SET_USER_PHOTO,
  SET_USER_PHONE_NUMBER,
} from '../types.js';

export const setUserPhoneNumber = userPhoneNumber => ({
  type: SET_USER_PHONE_NUMBER,
  payload: userPhoneNumber,
});

export const setUserPhoto = photo => ({
  type: SET_USER_PHOTO,
  payload: photo,
});

export const setUserProp = ({ id, name, value }) => ({
  type: SET_USER_PROP,
  payload: {
    id,
    name,
    value,
  },
});
