export * from "./auth";
export * from "./deck";
export * from "./favs";

function httpRequestStub(result, timeout = 500) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), timeout);
  });
}

export const archiveCard = (cardId) => httpRequestStub(cardId);

export const checkMatch = () => httpRequestStub(false, 500);
