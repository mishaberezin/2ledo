import { AsyncStorage } from 'react-native';
import { SET_USER_TOKEN } from '../types';
import { setSerpLoading } from './appActions';

export const sendPhone = phone => (dispatch, getState, api) => {
  return api.sendPhone(phone);
};

export const sendCode = (code, hash) => (dispatch, getState, api) => {
  return api.sendCode(code, hash);
};

export const setUserToken = token => async (dispatch, getState, api) => {
  await AsyncStorage.setItem('token', token);
  dispatch({
    type: SET_USER_TOKEN,
    payload: { token },
  });

  setSerpLoading();

  const result = await api.fetchMe(token);

  fetch('http://192.168.1.158:8444/api/v1/me', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': '1',
    },
  })
    .then(resp => resp.json())
    .then(data => {
      console.log('===========================');
      console.log(data);
      console.log('===========================');
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
