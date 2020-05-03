import { isAuthorized, removeToken } from '@src/api/token-storage';
import { AuthStatus } from '../reducers/auth-reducer';

export const restoreAuth = () => async (dispatch) => {
  const isTokenExists = await isAuthorized();

  if (isTokenExists) {
    dispatch({ type: 'SET_AUTH_STATUS', payload: AuthStatus.AUTHORIZED });
  } else {
    dispatch({ type: 'SET_AUTH_STATUS', payload: AuthStatus.NOT_AUTHORIZED });
  }
};

export const logOut = () => async (dispatch) => {
  await removeToken();
  dispatch({ type: 'SET_AUTH_STATUS', payload: AuthStatus.NOT_AUTHORIZED });
};
