import memoize from "lodash/memoize";
import { AsyncStorage } from "react-native";

type Token = string | null;

export const getToken = memoize(
  async (): Promise<Token> => {
    return await AsyncStorage.getItem("token");
  }
);

export const storeToken = async (token: string) => {
  await AsyncStorage.setItem("token", token);
  getToken.cache.clear?.();
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("token");
  getToken.cache.clear?.();
};

export const isAuthorized = async () => {
  const token = await getToken();
  return token !== null;
};
