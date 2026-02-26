import { create } from 'zustand';

interface UserState {
  user: unknown | null;
  setUser: (user: unknown) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
