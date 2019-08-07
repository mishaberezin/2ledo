import { SET_USER_NAME, SET_USER_PHOTO } from '../types.js';

export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName
});

export const setUserPhoto = photo => ({
  type: SET_USER_PHOTO,
  payload: photo
});
