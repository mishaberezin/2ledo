import ExpoConstants from 'expo-constants';
import { apiAxios } from './axios';
import { storeToken } from './token-storage';

export const loginByApplicationId = async () => {
  const { data } = await apiAxios.post('/auth/login', {
    clientId: ExpoConstants.installationId,
    secret: '',
  });

  const { token } = data;

  await storeToken(token);
};
