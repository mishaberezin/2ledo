import { AsyncStorage } from 'react-native';
import api from '../../api';
import { SET_USER_TOKEN } from '../types';

export const sendPhone = phone => () => {
  return api.sendPhone(phone);
};

export const sendCode = (code, hash) => () => {
  return api.sendCode(code, hash);
};

export const setUserToken = token => dispatch => {
  AsyncStorage.setItem('token', token).then(() => {
    dispatch({
      type: SET_USER_TOKEN,
      payload: { token },
    });
  });
};
