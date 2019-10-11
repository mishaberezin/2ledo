// Модуль про сохраненине/извлечение стартового стейта.
// Нормализации, миграции тоже здесь.
// Сохранение через мидлварь.

import { AsyncStorage } from 'react-native';

export const getInitialState = async () => {
  return await AsyncStorage.getItem('store');
};

export const persistMiddleware = () => next => action => {
  return next(action);
};
