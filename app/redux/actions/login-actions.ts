import { AsyncStorage } from 'react-native';
import { SET_USER_TOKEN } from '../types';
import { setSerpLoading } from './app-actions';

export const sendPhone = (phone) => (dispatch, getState, api) => {
  return api.sendPhone(phone);
};

export const sendCode = (code, hash) => (dispatch, getState, api) => {
  return api.sendCode(code, hash);
};

export const setUserToken = (token) => async (dispatch, getState, api) => {
  await AsyncStorage.setItem('token', token);

  dispatch({
    type: SET_USER_TOKEN,
    payload: { token },
  });

  setSerpLoading();

  const result = await api.fetchMe(token);
};

export const unsetUserToken = () => async (dispatch) => {
  await AsyncStorage.removeItem('token');
  dispatch({
    type: SET_USER_TOKEN,
    payload: { token: null },
  });
};

export const checkUserToken = () => async () => {
  return await AsyncStorage.getItem('token');
};
