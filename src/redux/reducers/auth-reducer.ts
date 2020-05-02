type AuthReducerActionType = 'SIGN_IN' | 'SIGN_OUT' | 'RESTORE_TOKEN';
type AuthReducerAction = {
  type: AuthReducerActionType;
};

const INITIAL_STATE = {
  token: null,
  isLoading: true,
  isSignout: false,
};

export const authReducer = (
  state = INITIAL_STATE,
  action: AuthReducerAction,
) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
      };
    }
    case 'SIGN_OUT': {
      return {
        ...state,
        isLoading: false,
        token: null,
      };
    }
    default:
      return state;
  }
};
