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
  checkId,
  resetPassword,
} from "../api/auth.api";
import { JoinProps } from "../pages/Join";

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();

  const handle401Error = () => {
    window.alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
    userLogout();
  };

  const userJoin = (data: JoinProps) => {
    join(data).then((res) => {
      window.alert("회원가입이 완료되었습니다.");
      navigate("/users/login");
    }).catch((err) => {
      window.alert("회원가입에 실패하였습니다.");
    });
  };
  
  const userLogin = (data: LoginProps) => {
    login(data).then((res) => {
      storeLogin(res.token);
      window.alert("로그인이 완료되었습니다.");
      navigate("/");
    }).catch((err) => {
      window.alert("로그인에 실패하였습니다.");
      window.location.reload();
    });
  };
  
  const userLogout = async () => {
    try {
      await logout();
      storeLogout();
      navigate("/users/login");
    } catch (err) {
      console.error(err);
    }
  };

  const checkIdDuplication = async (id: string): Promise<boolean> => {
    try {
      const res = await checkId(id);
      console.log(res);
      return res.isDuplicated;
    } catch (err) {
      console.error("아이디 중복체크에 실패하였습니다.", err);
      window.alert("아이디 중복체크에 실패하였습니다.");
      return false;
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
      navigate("/login");
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
    checkIdDuplication,
    userResetPassword,
    userCheckCurrentPassword,
    userCheckAvailablePassword,
  };
};
