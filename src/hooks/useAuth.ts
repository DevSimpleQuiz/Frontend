import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { LoginProps } from "../pages/Login";
import { join, login } from "../api/auth.api";
import { JoinProps } from "../pages/Join";

export const useAuth = () => {
  const navigation = useNavigate();
  const { storeLogin } = useAuthStore();

  const userLogin = (data: LoginProps) => {
    login(data).then((res) => {
      storeLogin(res.token);
      window.alert("로그인이 완료되었습니다.");
      navigation("/");
    }, (err) => {
      window.alert("로그인에 실패하였습니다.");
      window.location.reload();
    })
  };

  const userJoin = (data: JoinProps) => {
    join(data).then((res) => {
      window.alert("회원가입이 완료되었습니다.");
      navigation("/login");
    })
  };

  return { userLogin, userJoin };
};