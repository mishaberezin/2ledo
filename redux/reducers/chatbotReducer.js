import { CHATBOT_SET_IS_WRITING, SEND_CHATBOT_MESSAGE, SET_CURRENT_SCENARIO_ID } from '../types.js';
const INITIAL_STATE = {
    isWriting: false,
    currentScenarioId: null,
    messages: []
};

const chatbotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHATBOT_SET_IS_WRITING: 
    case SET_CURRENT_SCENARIO_ID:
      return {
        ...state,
        ...action.payload
      };
    case SEND_CHATBOT_MESSAGE: {
        return {
            ...state,
            messages: [ ...state.messages, action.payload.message ]
        };
    }
    default:
      return state;
  }
};

export default chatbotReducer;
