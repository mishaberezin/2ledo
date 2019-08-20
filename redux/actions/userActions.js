import {
  SET_USER_NAME,
  SET_USER_PHOTO,
  SET_USER_PHONE_NUMBER,
} from '../types.js';

export const setUserPhoneNumber = userPhoneNumber => ({
  type: SET_USER_PHONE_NUMBER,
  payload: userPhoneNumber,
});

export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName,
});

export const setUserPhoto = photo => ({
  type: SET_USER_PHOTO,
  payload: photo,
});
