import { SET_USER_NAME } from '../types.js';

export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName
});
