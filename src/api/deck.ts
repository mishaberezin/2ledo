import { apiAxios } from "./axios";

export const MAX_CARDS_PER_FETCH = 20;

export const fetchCards = async () => {
  const { data } = await apiAxios.get("/persons/my/deck/");
  return data;
};

const styb = [{
  "id": "5eec7b044771b2317a9aee8b",
  "type": "APARTMENT",
  "apartment": {
      "id": "5ee49316becf4a427af13f59",
      "data": {
          "title": "Найс",
          "description": "топчик хата на окраине",
          "rentalPrice": 20000,
          "roomsCount": 2,
          "floor": 5,
          "photos": [
              {
                  "url": "https://cdn-p.cian.site/images/6/576/548/kvartira-moskva-hodynskiy-bulvar-845675632-4.jpg"
              }
          ],
          "address": {
              "oneLine": "Патрики",
              "lat": 0.0,
              "lon": 0.0
          }
      }
  }
}];

export const fetchFavoritesCards = async () => {
  const { data } = await apiAxios.get("/persons/my/favorites/");
  return data;
};

export const likeCard = async (cardId: string) => {
  await apiAxios.post(`/persons/my/deck/${cardId}/like`);
};

export const dislikeCard = async (cardId: string) => {
  await apiAxios.post(`/persons/my/deck/${cardId}/dislike`);
};
