"use client";
import { createContext, useState, useLayoutEffect, ReactNode } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}
// Определение типов для контекста темы
export const ThemeContext = createContext<ThemeContextProps | undefined>(
    undefined,
);

// Создание контекста с типами
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            // Если тема не сохранена, использовать системные настройки
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches
                ? "dark"
                : "light";
            setTheme(systemTheme);
            document.documentElement.classList.add(systemTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${theme}`}>
                <div className="bg-gray-200 dark:bg-black">{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};
