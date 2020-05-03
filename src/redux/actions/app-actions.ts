import { config } from '@src/config';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

export const loadPrimeAssets = () => async (dispatch) => {
  await Promise.all([
    Asset.loadAsync(config.primeAssets.images),
    Font.loadAsync(config.primeAssets.fonts),
  ]);

  dispatch({ type: 'PRIME_ASSETS_LOADED' });
};

export const setAppLoading = (value) => {
  return { type: 'SET_APP_LOADING', payload: value };
};

export const setSerpLoading = (value) => ({
  type: 'SET_SERP_LOADING',
  payload: value,
});
