import { createStore } from 'zustand/vanilla';
import { create } from 'zustand';

interface ThemeStore {
    theme: { foreground: string; background: string ,dark:boolean };
    setTheme: (theme: { foreground: string; background: string ,dark:boolean }) => void;
}

// Create the vanilla store
const store = createStore<ThemeStore>((set) => ({
    theme: { foreground: '#F5F5F5', background: '#1C1B1B' ,dark: true},
    setTheme: (theme) => set({ theme }),
}));

// Bind the vanilla store to React
export const useStore = create(store);

export default useStore;