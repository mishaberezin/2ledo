const INITIAL_STATE = {
  isAppLoading: true,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_APP_LOADING': {
      return { ...state, isAppLoading: action.payload };
    }
    case 'SET_SERP_LOADING': {
      return { ...state, serpLoading: action.payload };
    }
    default:
      return state;
  }
};
