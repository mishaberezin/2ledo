import { AsyncStorage } from 'react-native';

export const restoreAuth = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({
        type: 'SIGN_IN',
        payload: {
          token,
        },
      });
    } else {
      dispatch({
        type: 'SIGN_OUT',
      });
    }
  } catch (e) {
    // error reading value
  }
};
