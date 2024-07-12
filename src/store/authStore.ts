import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  isLoggedIn: boolean;
  isDuplicate: boolean;
  storeLogin: () => void;
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
  // document.cookie = 'token=; Max-Age=0'; 
};

export const useAuthStore = create<StoreState>()(
  persist(
    (set) => ({
      isLoggedIn: !!getToken(),
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
