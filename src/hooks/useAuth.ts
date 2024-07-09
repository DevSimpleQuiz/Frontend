import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { LoginProps } from "../pages/Login";
import { checkAvailablePassword, checkCurrentPassword, join, login, resetPassword } from "../api/auth.api";
import { JoinProps } from "../pages/Join";
import { AxiosError } from 'axios';
import { ResetProps } from "../pages/ResetPassword";

export const useAuth = () => {
  const navigation = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();

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


  const userResetPassword = (data: ResetProps) => {
    resetPassword(data).then(
      () => {
        window.alert("비밀번호가 재설정되었습니다.");
        storeLogout();
        navigation("/login");
      },
      (error) => {
        if (error instanceof AxiosError && error.response?.status === 401) {
          window.alert("인증이 필요합니다. 다시 로그인 해주세요.");
          storeLogout();
          navigation("/login");
        } else {
          window.alert("비밀번호 재설정에 실패하였습니다.");
        }
        console.error('Error resetting password:', error);
      }
    );
  };

  const userCheckCurrentPassword = async (password: string) => {
    try {
      const response = await checkCurrentPassword(password);
      return response.success;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        window.alert("인증이 필요합니다. 다시 로그인 해주세요.");
        storeLogout();
        navigation("/login");
      } else {
        console.error("Check current password failed", error);
      }
      return false;
    }
  };

  const userCheckAvailablePassword = async (password: string, newPassword: string) => {
    try {
      const response = await checkAvailablePassword(password, newPassword);
      return response.success;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        window.alert("인증이 필요합니다. 다시 로그인 해주세요.");
        storeLogout();
        navigation("/login");
      } else {
        console.error("Check available password failed", error);
      }
      return false;
    }
  };


  return {
    userLogin,
    userJoin,
    userResetPassword,
    userCheckCurrentPassword,
    userCheckAvailablePassword,
  };
};
