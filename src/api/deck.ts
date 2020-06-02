import { apiAxios } from "./axios";

export const MAX_CARDS_PER_FETCH = 20;

export const fetchCards = async () => {
  const { data } = await apiAxios.get("/persons/my/deck/");
  return data;
};

export const likeCard = async (cardId: string) => {
  await apiAxios.post(`/persons/my/deck/${cardId}/like`);
};

export const dislikeCard = async (cardId: string) => {
  await apiAxios.post(`/persons/my/deck/${cardId}/dislike`);
};
