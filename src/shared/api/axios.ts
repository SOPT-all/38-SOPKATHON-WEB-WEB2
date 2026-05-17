import axios from 'axios';

// prod에선 Vercel rewrites가 /api/* → 서버 도메인 프록시 (CORS 우회)
// dev에선 .env.local의 VITE_API_BASE_URL 사용
const BASE_URL: string | undefined = import.meta.env.PROD
  ? ''
  : (import.meta.env as { readonly VITE_API_BASE_URL?: string })
      .VITE_API_BASE_URL;

const normalizeError = (error: unknown): Error => {
  if (error instanceof Error) {
    return error;
  }

  return new Error(typeof error === 'string' ? error : 'Unknown axios error');
};

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

privateInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('browserToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: unknown) => Promise.reject(normalizeError(error)),
);

privateInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    return Promise.reject(normalizeError(error));
  },
);
