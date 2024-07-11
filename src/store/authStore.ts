import { create } from "zustand";

interface StoreState {
  isLoggedIn: boolean;
  isDuplicate: boolean;
  storeLogin: () => void;
  storeLogout: () => void;
}

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: false,
  isDuplicate: false,
  storeLogin: () => {
    set({ isLoggedIn: true });
  },
  storeLogout: () => {
    set({ isLoggedIn: false });
  }
}));
