import { CHATBOT_SCENARIOS } from '../../constants/chatbotScenarios';
import { CHATBOT_SET_IS_WRITING, SEND_CHATBOT_MESSAGE, SET_CURRENT_SCENARIO_ID } from '../types';

const setIsWriting = isWriting => ({
    type: CHATBOT_SET_IS_WRITING,
    payload: {
        isWriting
    }
}); 

const sendChatbotMessage = message => ({
    type: SEND_CHATBOT_MESSAGE,
    payload: {
        message
    }
});

const setCurrentScenarioIdAction = currentScenarioId => ({
    type: SET_CURRENT_SCENARIO_ID,
    payload: {
        currentScenarioId
    }
});

export const addChatbotMessageAction = (message) => dispatch => {
    dispatch(setIsWriting(true));
	return new Promise((resolve) => {
        setTimeout(() => {
			dispatch(setIsWriting(false));
			dispatch(sendChatbotMessage({
                author: 'chatbot',
                ...message
            }));
			resolve();
        }, 1000);
    });
};

export const addChatbotUserMessageAction = (message) => dispatch => {
    dispatch(sendChatbotMessage({
        author: 'user',
        ...message
    }));
};

export const changeChatbotCurrentScenarioIdAction = scenarioId => async dispatch => {
    const scenario = CHATBOT_SCENARIOS.messages[scenarioId];

    if (scenarioId === 'END_OF_SCENARIO') {
        dispatch(setCurrentScenarioIdAction(scenarioId));
        return;
    }

    if (!scenario) {
        return;
    }


    try {
        await dispatch(addChatbotMessageAction({
            text: scenario.text
        }));

        dispatch(setCurrentScenarioIdAction(scenarioId));

        if (scenario.nextMessageId) {
            dispatch(changeChatbotCurrentScenarioIdAction(scenario.nextMessageId));
        }
    } catch(e) {
        console.error('something went wrong');
    }
};

export const initChatbotAction = () => (dispatch, getState) => {
    const state = getState();
    const { currentScenarioId } = state.chatbot;
    if (!currentScenarioId) {
        dispatch(changeChatbotCurrentScenarioIdAction(CHATBOT_SCENARIOS.initialId));
    }
};
