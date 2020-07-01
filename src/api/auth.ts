import ExpoConstants from "expo-constants";
import { apiAxios } from "./axios";
import { storeToken } from "./token-storage";

export const requestToken = () => apiAxios.post("/auth/login", {
  clientId: ExpoConstants.installationId,
  secret: "",
});

export const loginByApplicationId = async () => {
  const { data } = await requestToken();
  const { token } = data;

  await storeToken(token);
};
