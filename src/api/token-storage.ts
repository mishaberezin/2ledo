import { AsyncStorage } from 'react-native';
import axios, { AxiosRequestConfig } from 'axios';
import * as api from './index';

const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

const storeToken = async (token) => {
  await AsyncStorage.setItem('token', token);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem('token');
};

export const isAuthorized = async () => {
  const token = await getToken();
  return token !== null;
};

export const getAuthHeader = async () => {
  const token = await getToken();

  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
