import { JoinProps } from "../pages/Join";
import { LoginProps } from "../pages/Login";
import { httpClient } from "./http";
import axios, { AxiosError } from 'axios';

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

//비밀번호 재설정
interface ResetPasswordProps {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

export const resetPassword = async (data: ResetPasswordProps) => {
  try {
    console.log('ResetPassword request data:', data); 
    const response = await httpClient.put('/users/password', data);
    console.log('ResetPassword response:', response.data); 
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error resetting password:', error.response?.data || error.message);
      if (error.response?.data) {
        console.error('Server error details:', error.response.data);
      }
      throw error.response?.data || error.message;
    } else {
      console.error('Unknown error resetting password:', error);
      throw new Error('Unknown error occurred');
    }
  }
};

interface CheckCurrentPasswordResponse {
  success: boolean;
}

// 현재 비밀번호 확인
export const checkCurrentPassword = async (password: string): Promise<CheckCurrentPasswordResponse> => {
  const response = await httpClient.post<CheckCurrentPasswordResponse>(`/users/action/is-current-password`, { password });
  return response.data;
};

interface CheckAvailablePasswordResponse {
  success: boolean;
}

// 사용 가능한 비밀번호 확인
export const checkAvailablePassword = async (password: string, newPassword: string): Promise<CheckAvailablePasswordResponse> => {
  const response = await httpClient.post<CheckAvailablePasswordResponse>(`/users/action/is-available-password`, { password, newPassword });
  return response.data;
};