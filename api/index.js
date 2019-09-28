// Клиент ходит в API через этот модуль.
import httpRequestStub from './httpRequestStub';
import data from '../server';

export default {
  fetchCards: () => httpRequestStub(data.deckCards),
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
};
