"use client";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none bg-stone-300 dark:bg-gray-800 transition-colors duration-300">
            {theme === "light" ? (
                <FaMoon className="w-6 h-6 text-gray-800 dark:text-yellow-500 transition-transform transform duration-300 ease-in-out rotate-0 hover:rotate-180" />
            ) : (
                <FaSun className="w-6 h-6 text-yellow-500 dark:text-gray-200 transition-transform transform duration-300 ease-in-out rotate-0 hover:rotate-180" />
            )}
        </button>
    );
};

export default ThemeToggleButton;
