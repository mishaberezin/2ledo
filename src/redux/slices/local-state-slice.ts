import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

const localStateSlice = createSlice({
  name: 'localState',
  initialState: {
    matchIndicator: false,
    matchPopup: {
      visible: false,
      card: null,
    },
  },
  reducers: {
    setCurrentCardId: (state, action: PayloadAction) => {
      state.currentCardId = action.payload;
    },

    setMatchIndicator: (state, action: PayloadAction) => {
      state.matchIndicator = action.payload;
    },

    showMatchPopup: (state, action: PayloadAction) => {
      state.matchPopup = {
        visible: true,
        card: action.payload.card,
      };
    },

    hideMatchPopup: (state, action: PayloadAction) => {
      state.matchPopup = {
        visible: true,
        card: null,
      };
    },
  },
});

export const { reducer: localStateReducer } = localStateSlice;
export const {
  setCurrentCardId,
  setMatchIndicator,
  showMatchPopup,
  hideMatchPopup,
} = localStateSlice.actions;

const matchPollProcess = {
  isStarted: false,
};

const requestMatch = async (dispatch, request) => {
  const match = await request();
  if (matchPollProcess.isStarted) {
    setTimeout(() => {
      dispatch(startMatchPolling());
    }, 1000);
  }
  return match || new Date().getSeconds() % 6 === 0; //todo delete
};

export const startMatchPolling = (): AppThunk => async (
  dispatch,
  getState,
  api
) => {
  matchPollProcess.isStarted = true;
  const match = await requestMatch(dispatch, api.checkMatch);
  if (match) {
    dispatch(setMatchIndicator(true));
  }
  return match;
};
