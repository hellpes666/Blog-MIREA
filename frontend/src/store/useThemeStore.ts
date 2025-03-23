import { create } from "zustand";
import { Theme } from "../constants";

interface ThemeState {
	theme: Theme;
	setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
	theme: (localStorage.getItem("blog-theme") as Theme) || "coffee",
	setTheme: (theme: Theme) => {
		localStorage.setItem("blog-theme", theme);
		set({ theme });
	},
}));
