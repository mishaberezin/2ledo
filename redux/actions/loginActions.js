import { AsyncStorage } from 'react-native';
import api from '../../api';
import { SET_USER_TOKEN } from '../types';

export const sendPhone = phone => () => {
  return api.sendPhone(phone);
};

export const sendCode = (code, hash) => () => {
  return api.sendCode(code, hash);
};

export const setUserToken = token => async dispatch => {
  await AsyncStorage.setItem('token', token);
  dispatch({
    type: SET_USER_TOKEN,
    payload: { token },
  });
};

export const unsetUserToken = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch({
    type: SET_USER_TOKEN,
    payload: { token: null },
  });
};

export const checkUserToken = () => async () => {
  return await AsyncStorage.getItem('token');
};
