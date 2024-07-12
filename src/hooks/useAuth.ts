import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { join, login, checkId, logout } from "../api/auth.api";
import { JoinProps } from "../pages/Join";
import { LoginProps } from "../pages/Login";

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();
  
  const userJoin = (data: JoinProps) => {
    join(data).then(() => {
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

  return { userJoin, userLogin, userLogout, checkIdDuplication };
  
};
