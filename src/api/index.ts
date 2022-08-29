import axios, { AxiosInstance } from 'axios';

import { CONFIG } from './config';

export const http: AxiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
});

/** Re-config interceptors if required. */
http.interceptors.request.use(config => config);
http.interceptors.response.use(config => config);