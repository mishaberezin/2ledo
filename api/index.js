import httpRequestStub from './httpRequestStub';
import { deck } from '../server/db';

export default {
  fetchMe: userId => {
    return `HELLO ${userId}!`;
  },

  fetchCards: (/*offset, limit*/) => httpRequestStub(deck, 500),
  likeCard: cardId => {
    return httpRequestStub(cardId);
  },
  dislikeCard: cardId => {
    return httpRequestStub(cardId);
  },
  archiveCard: cardId => {
    return httpRequestStub(cardId);
  },
  sendPhone: phone =>
    httpRequestStub({
      hash: 'sg234fsgd34fsd',
      phone,
    }),
  sendCode: (/* code, hash */) =>
    httpRequestStub({
      status: true,
      token: 'dsgfd23432fsg234fsgd!34fsd',
    }),
  checkMatch: () => httpRequestStub(false, 500),
};
