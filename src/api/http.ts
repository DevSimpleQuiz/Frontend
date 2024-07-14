import axios, { AxiosRequestConfig } from "axios";

const DEFAULT_PORT = 4242;
const DEFAULT_TIMEOUT = 30000;

interface CreateClientConfig extends AxiosRequestConfig {
  port?: number;
}

export const createClient = (config?: AxiosRequestConfig) => {
  const port = DEFAULT_PORT;
  const BASE_URL = `http://localhost:${port}`;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true, // 여기에 withCredentials 설정
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (response) => {
      return response;
    },
    (error) => {
      // 토큰이 만료되었을 때
      if (error.response && error.response.status === 401) {
        window.location.href = "/users/login";
        return;
      }
      // 로그인 만료 처리
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export const httpClient = createClient();
