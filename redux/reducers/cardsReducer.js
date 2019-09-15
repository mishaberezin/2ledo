import {
  ADD_CARD,
  SET_CARD_PRICE,
  SET_CARD_NUMBER_OF_PEOPLE,
  SET_CARD_DESCRIPTION,
} from '../types.js';

const INITIAL_STATE = {};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return { ...state, [action.payload.id]: action.payload.value };
    }
    case SET_CARD_PRICE: {
      const card = state[action.payload.id];
      return {
        ...state,
        [action.payload.id]: {
          ...card,
          data: { ...card.data, price: action.payload.value },
        },
      };
    }
    case SET_CARD_NUMBER_OF_PEOPLE: {
      const cardId = action.payload.id;
      const card = state[cardId];

      return {
        ...state,
        [cardId]: {
          ...card,
          data: { ...card.data, numberOfPeople: action.payload.value },
        },
      };
    }
    case SET_CARD_DESCRIPTION: {
      const cardId = action.payload.id;
      const card = state[cardId];

      return {
        ...state,
        [cardId]: {
          ...card,
          data: { ...card.data, description: action.payload.value },
        },
      };
    }
    default:
      return state;
  }
};

export default cardsReducer;
