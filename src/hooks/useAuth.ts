import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { LoginProps } from "../pages/Login";
import {
  checkAvailablePassword,
  checkCurrentPassword,
  join,
  login,
  logout,
  resetPassword,
} from "../api/auth.api";
import { JoinProps } from "../pages/Join";

export const useAuth = () => {
  const navigation = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();

  const handle401Error = () => {
    window.alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
    storeLogout();
    navigation("/login");
  };

  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);
        window.alert("로그인이 완료되었습니다.");
        navigation("/");
      },
      (err) => {
        window.alert("로그인에 실패하였습니다.");
        window.location.reload();
      }
    );
  };

  const userJoin = (data: JoinProps) => {
    join(data).then((res) => {
      window.alert("회원가입이 완료되었습니다.");
      navigation("/login");
    });
  };

  const userLogout = async () => {
    try {
      await logout();
      storeLogout();
      navigation("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const userResetPassword = async (
    currentPassword: string,
    password: string
  ) => {
    try {
      await resetPassword(currentPassword, password);
      window.alert("비밀번호가 재설정되었습니다.");
      storeLogout();
      navigation("/login");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          handle401Error();
        } else if (error.response) {
          throw error.response.data.errors
            .map((err: any) => err.msg)
            .join("\n");
        } else {
          throw "서버 응답이 없습니다. 다시 시도해주세요.";
        }
      } else {
        console.error(error);
        throw "비밀번호 재설정에 실패하였습니다.";
      }
    }
  };

  const userCheckCurrentPassword = async (password: string) => {
    try {
      const response = await checkCurrentPassword(password);
      return response.success;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        handle401Error();
      } else {
        console.error(error);
      }
      return false;
    }
  };

  const userCheckAvailablePassword = async (
    password: string,
    newPassword: string
  ) => {
    try {
      const response = await checkAvailablePassword(password, newPassword);
      return response.success;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        handle401Error();
      } else {
        console.error(error);
      }
      return false;
    }
  };

  return {
    userLogin,
    userJoin,
    userLogout,
    userResetPassword,
    userCheckCurrentPassword,
    userCheckAvailablePassword,
  };
};
