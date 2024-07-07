import { create } from "zustand";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const setToken = (token: string) => {
  localStorage.setItem("token", token);
  console.log(token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: getToken() ? true : false,
  storeLogin: (token) => {
    set({ isLoggedIn: true });
    setToken(token);
  },
  storeLogout: () => {
    set({ isLoggedIn: false });
    removeToken();
  },
}));