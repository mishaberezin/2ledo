import { SET_CURRENT_CARD, SET_MATCH_INDICATOR } from '../types';

const matchPollProcess = {
  isStarted: false,
};

export const setCurrentCardId = currentCardId => {
  return {
    type: SET_CURRENT_CARD,
    payload: currentCardId,
  };
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

export const startMatchPolling = () => async (dispatch, _, api) => {
  matchPollProcess.isStarted = true;
  const match = await requestMatch(dispatch, api.checkMatch);
  if (match) {
    dispatch(showMatchIndicator());
  }
  return match;
};

const showMatchIndicator = () => {
  return {
    type: SET_MATCH_INDICATOR,
    payload: true,
  };
};

export const hideMatchIndicator = () => {
  return {
    type: SET_MATCH_INDICATOR,
    payload: false,
  };
};

export const stopMatchPolling = () => {
  matchPollProcess.isStarted = false;
};
