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

export const resetPassword = async (password: string, newPassword: string) => {
  try {
    const response = await httpClient.put('/users/password', {  password, newPassword  }, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    } else {
      throw new Error('알 수 없는 에러 발생');
    }
  }
};

interface PasswordResponse {
  success: boolean;
}

// 현재 비밀번호 확인
export const checkCurrentPassword = async (password: string): Promise<PasswordResponse> => {
  const response = await httpClient.post<PasswordResponse>(`/users/action/is-current-password`, { password }, { withCredentials: true });
  return response.data;
};

// 사용 가능한 비밀번호 확인
export const checkAvailablePassword = async (password: string, newPassword: string): Promise<PasswordResponse> => {
  const response = await httpClient.post<PasswordResponse>(`/users/action/is-available-password`, { password, newPassword }, { withCredentials: true });
  return response.data;
};
