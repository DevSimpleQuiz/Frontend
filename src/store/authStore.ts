import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  isLoggedIn: boolean;
  isDuplicate: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const useAuthStore = create<StoreState>()(
  persist(
    (set) => ({
      isDuplicate: false,
      isLoggedIn: false, // 초기 상태를 false로 설정
      storeLogin: (token) => {
        setToken(token);
        set({ isLoggedIn: true });
      },
      storeLogout: () => {
        removeToken();
        set({ isLoggedIn: false });
      },
    }),
    {
      name: "auth", // localStorage 키
    }
  )
);
