import { deck } from "@src/data/deck";

export * from "./auth";

function httpRequestStub(result, timeout = 500) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), timeout);
  });
}

export const fetchCards = () => httpRequestStub(deck, 500);

export const likeCard = (cardId) => httpRequestStub(cardId);

export const dislikeCard = (cardId) => httpRequestStub(cardId);

export const archiveCard = (cardId) => httpRequestStub(cardId);

export const checkMatch = () => httpRequestStub(false, 500);
