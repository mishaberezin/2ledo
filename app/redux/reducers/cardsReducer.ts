import {
  ADD_CARD,
  SET_CARD_PROP,
  SET_CARD_PRICE,
  SET_CARD_NUMBER_OF_PEOPLE,
  ADD_CARD_PHOTO,
} from '../types';

const INITIAL_STATE = {};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return { ...state, [action.payload.id]: action.payload.value };
    }
    case SET_CARD_PROP: {
      const { id, name, value } = action.payload;
      const card = state[id];

      return {
        ...state,
        [id]: {
          ...card,
          data: { ...card.data, [name]: value },
        },
      };
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
    case ADD_CARD_PHOTO: {
      const { id, photo } = action.payload;
      const card = state[id];

      return {
        ...state,
        [id]: {
          ...card,
          data: { ...card.data, Photos: [...card.data.Photos, photo] },
        },
      };
    }
    default:
      return state;
  }
};

export default cardsReducer;
