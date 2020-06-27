import { apiAxios } from "./axios";

export const fetchFavoritesCards = async () => {
  const { data } = await apiAxios.get("/persons/my/favorites/");
  return data;
};
