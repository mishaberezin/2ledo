import { deck } from '../data/deck';

function httpRequestStub(result, timeout = 500) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), timeout);
  });
}

export const fetchCards = () => httpRequestStub(deck, 500);

export const likeCard = (cardId) => httpRequestStub(cardId);

export const dislikeCard = (cardId) => httpRequestStub(cardId);

export const archiveCard = (cardId) => httpRequestStub(cardId);

const EXAMPLE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTI2ODg4NDQyMiIsImlhdCI6MTUxNjIzOTAyMn0';

export const logIn = (data) => {
  const { phone } = data;

  return httpRequestStub({
    token: EXAMPLE_TOKEN,
    phone,
  });
};

export const checkMatch = () => httpRequestStub(false, 500);
