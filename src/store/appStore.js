import {create} from "zustand";

export const useAppStore = create((set) => ({
    //AUTH SLICE
    user: null,
    login: (user) => set({user}),
    logout: () => set({user: null}),

    //UI SLICE
    theme: 'light',
    toggleTheme: () => set((state) => ({theme: state.theme === "light" ? "dark" : "light"})),
}));