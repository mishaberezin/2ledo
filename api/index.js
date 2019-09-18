// Клиент ходит в API через этот модуль.
import httpRequestStub from './httpRequestStub';
import data from '../server';

export default {
  fetchCards: () => httpRequestStub(data.deckCards),
};
