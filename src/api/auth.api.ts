import { JoinProps } from "../pages/Join";
import { LoginProps } from "../pages/Login";
import { httpClient } from "./http";

// 회원가입
export const join = async (data: JoinProps) => {
  const response = await httpClient.post("/join", data);

  return response.data;
};

// 로그인
interface LoginResponse {
  token: string;
}

export const login = async (data: LoginProps) => {
  const response = await httpClient.post<LoginResponse>("/login", data);

  return response.data;
};