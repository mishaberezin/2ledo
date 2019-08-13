import { AsyncStorage } from 'react-native';
import { SET_INITIAL_STORE } from '../types.js';

export const setInitialStore = store => {
  return {
    type: SET_INITIAL_STORE,
    payload: store
  };
};

export const getInitialStore = () => async dispatch => {
  const store = await AsyncStorage.getItem('store');
  dispatch(setInitialStore(store));
};
