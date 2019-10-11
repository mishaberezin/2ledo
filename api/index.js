// Клиент ходит в API через этот модуль.
import httpRequestStub from './httpRequestStub';
import data from '../redux/__sampleState';

export default {
  fetchCards: (/*offset, limit*/) => httpRequestStub(data.deck, 500),
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
