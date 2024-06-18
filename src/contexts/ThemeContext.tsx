"use client";
import {
    createContext,
    useState,
    useLayoutEffect,
    ReactNode,
    useContext,
} from "react";

// Définition des types pour le contexte de thème
interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

// Création du contexte de thème avec les types appropriés
export const ThemeContext = createContext<ThemeContextProps | undefined>(
    undefined,
);

interface ThemeProviderProps {
    children: ReactNode;
}

// Création du fournisseur de contexte de thème
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            // Utiliser les paramètres système si aucune thème n'est enregistrée
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

// Hook personnalisé pour utiliser le contexte de thème
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
