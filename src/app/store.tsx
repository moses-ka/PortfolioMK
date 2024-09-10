import { create } from 'zustand';

interface ThemeStore {
    theme: { foreground: string; background: string ,dark:boolean };
    setTheme: (theme: { foreground: string; background: string ,dark:boolean }) => void;
}

const  ThemeStore = create<ThemeStore>((set) => ({
    theme: { foreground: '#F5F5F5', background: '#1C1B1B' ,dark: true},
    setTheme: (theme) => set({ theme }),
}));


export default ThemeStore;