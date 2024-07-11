import { JoinProps } from "../pages/Join";
import { LoginProps, LoginToken } from "../pages/Login";
import { httpClient } from "./http";

// 회원가입
export const join = async (data: JoinProps) => {
  const response = await httpClient.post("/users/join", data);

  return response.data;
};

// 회원가입 아이디 중복확인
export const checkId = async (id: string) => {
  const response = await httpClient.post("/users/join/check-login-id", id);

  return response.data;
};

// 로그인
export const login = async (data: LoginProps) => {
  const response = await httpClient.post<LoginToken>("/users/login", data);

  return response.data;
};

// 로그아웃
export const logout = async () => {
  const response = await httpClient.post("/users/logout");
  
  return response.data;
};