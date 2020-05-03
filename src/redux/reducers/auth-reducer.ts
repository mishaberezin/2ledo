export enum AuthStatus {
  PENDING,
  AUTHORIZED,
  NOT_AUTHORIZED,
}

const INITIAL_STATE = {
  isAuthorized: AuthStatus.PENDING,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_AUTH_STATUS': {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
};
