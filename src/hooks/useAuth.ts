import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { join, login, checkId, logout } from "../api/auth.api";
import { JoinProps } from "../pages/Join";
import { LoginProps } from "../pages/Login";

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();
  
  const userJoin = async (data: JoinProps) => {
    try {
      await join(data);
      window.alert("회원가입이 완료되었습니다.");
      navigate("/users/login");
    } catch (err) {
      window.alert("이미 존재하는 유저입니다.");
      throw err;
    }
  };
  
  const userLogin = async (data: LoginProps) => {
    try {
      const res = await login(data);
      storeLogin(res.token);
      window.alert(`${data.id}님, 반갑습니다.`);
      navigate("/");
    } catch (err) {
      window.alert("존재하지 않는 유저입니다.");
      window.location.reload();
      throw err;
    }
  };
  
  const userLogout = async () => {
    try {
      await logout();
      storeLogout();
      navigate("/users/login");
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const checkIdDuplication = async (id: string): Promise<boolean> => {
    try {
      const res = await checkId(id);
      console.log(res);
      return res.isDuplicated;
    } catch (err) {
      window.alert("아이디 중복체크에 실패하였습니다.");
      throw err;
    }
  };

  return { userJoin, userLogin, userLogout, checkIdDuplication };
};
