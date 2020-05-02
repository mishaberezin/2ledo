import { config } from '@src/config';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

export const warmUp = () => async (dispatch) => {
  dispatch({ type: 'APP_WARMING_UP' });

  await Promise.all([
    Asset.loadAsync(config.primeAssets.images),
    Font.loadAsync(config.primeAssets.fonts),
  ]);

  dispatch({ type: 'APP_ASSETS_LOADED' });
};

export const setSerpLoading = (value) => ({
  type: 'SET_SERP_LOADING',
  payload: value,
});
