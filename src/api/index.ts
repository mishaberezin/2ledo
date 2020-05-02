import { deck } from '../data/deck';

function httpRequestStub(result, timeout = 300) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), timeout);
  });
}

export const fetchMe = (userId) => {
  return `HELLO ${userId}!`;
};

export const fetchCards = () => httpRequestStub(deck, 500);

export const likeCard = (cardId) => httpRequestStub(cardId);

export const dislikeCard = (cardId) => httpRequestStub(cardId);

export const archiveCard = (cardId) => httpRequestStub(cardId);

export const sendPhone = (phone) =>
  httpRequestStub({
    hash: 'sg234fsgd34fsd',
    phone,
  });

export const sendCode = () =>
  httpRequestStub({
    status: true,
    token: 'dsgfd23432fsg234fsgd!34fsd',
  });

export const checkMatch = () => httpRequestStub(false, 500);
