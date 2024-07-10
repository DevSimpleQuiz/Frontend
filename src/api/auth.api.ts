import { JoinProps } from "../pages/Join";
import { LoginProps } from "../pages/Login";
import { httpClient } from "./http";
import axios from 'axios';

// 회원가입
export const join = async (data: JoinProps) => {
  const response = await httpClient.post("/users/join", data);

  return response.data;
};

// 로그인
interface LoginResponse {
  token: string;
}

export const login = async (data: LoginProps) => {
  const response = await httpClient.post<LoginResponse>("/users/login", data);

  return response.data;
};

// 로그아웃
export const logout = async () => {
  try {
    await httpClient.post('/users/logout', {});
  } catch (error) {
    console.error('로그아웃에 실패하였습니다.', error);
  }
};