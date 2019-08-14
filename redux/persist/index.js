// Модуль про сохраненине/извлечение стартового стейта.
// Нормализации, миграции тоже здесь.
// Сохранение через мидлварь.

import { AsyncStorage } from 'react-native';

export const getInitialState = async () => {
  return await AsyncStorage.getItem('store');
};

export const persistMiddleware = ({ getState }) => next => action => {
  console.log('HELLO PERSISTED: ', getState());

  return next(action);
};

// const checkAuth = async props => {
//   const userToken = await AsyncStorage.getItem('userToken');
//   props.navigation.navigate(userToken ? 'Main' : 'Auth');
// };
