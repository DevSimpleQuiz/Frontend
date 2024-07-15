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
  const response = await fetch("http://localhost:4242/users/join/check-login-id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error("아이디 중복체크 요청에 실패하였습니다.");
  }

  return await response.json();
};

// 로그인
export const login = async (data: LoginProps) => {
  const response = await httpClient.post<LoginToken>("/users/login", data);

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