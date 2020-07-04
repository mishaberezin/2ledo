import axios from "axios";
import { getToken, storeToken } from "./token-storage";
import { config } from "@app/config";
import { requestToken } from './auth';

export const apiAxios = axios.create({
  baseURL: config.api.host,
  timeout: 3000,
});

const HTTP_STATUS_CODE_UNAUTHORIZED = 401;
// В эти ручки не нужно передавать токен.
const omitTokenList = ["/auth/login"];

apiAxios.interceptors.request.use(async (config) => {
  const token = await getToken();
  const omitToken = omitTokenList.includes(config.url);

  // Если токена нет, лучше не слать ничего.
  if (token && !omitToken && !config.isRetry) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiAxios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === HTTP_STATUS_CODE_UNAUTHORIZED) {
      const { data: { token } = {} } = await requestToken();
      if (token) {
        await storeToken(token);
        const retryConfig = {
          ...error.config,
          isRetry: true,
          headers: {
            ...error.config.headers,
            Authorization: `Bearer ${token}`
          }
        }

        return apiAxios.request(retryConfig);
      }
    }

    return Promise.reject(error);
  }
);
