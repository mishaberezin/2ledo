import axios from "axios";
import { getToken } from "./token-storage";
import { config } from "@app/config";

export const apiAxios = axios.create({
  baseURL: config.api.host,
  timeout: 3000,
});

// В эти ручки не нужно передавать токен.
const omitTokenList = ["/auth/login"];

apiAxios.interceptors.request.use(async (config) => {
  // const token = await getToken();
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZWUzNzA3YmQ4NzZhMzRkMTVkMzk3M2UiLCJpc3MiOiJmdWNrIiwiZXhwIjoxNTkzNTAzMDgxfQ.AKQqCOhiDxKyECOBJ7TO4-9xxK2fAYHezv6Do3sDVv4';
  const omitToken = omitTokenList.includes(config.url);

  // Если токена нет, лучше не слать ничего.
  if (token && !omitToken) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
