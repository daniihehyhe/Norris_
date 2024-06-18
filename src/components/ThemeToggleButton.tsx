"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeOption {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    value: string;
}


const themeOptions: ThemeOption[] = [
    { label: "Светлая тема", icon: FaSun, value: "light" },
    { label: "Тёмная тема", icon: FaMoon, value: "dark" },
];

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleThemeChange = (newTheme: string) => {
        if (theme !== newTheme) {
            toggleTheme();
            localStorage.setItem("theme", newTheme);
        }
        setMenuOpen(false);
    };

    const currentIcon =
        themeOptions.find((option) => option.value === theme)?.icon || FaSun;

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={clsx(
                        "inline-flex justify-center items-center w-full p-2 rounded-full focus:outline-none transition-colors duration-300",
                        {
                            "bg-stone-300": theme !== "dark",
                            "dark:bg-gray-800": theme === "dark",
                        },
                    )}
                    id="menu-button"
                    aria-expanded={menuOpen}
                    aria-haspopup="true">
                    {React.createElement(currentIcon, {
                        className:
                            "w-6 h-6 transition-transform transform duration-300 ease-in-out rotate-0 hover:rotate-180",
                    })}
                </button>
            </div>

            {menuOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-300 opacity-100"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button">
                    <div className="py-1" role="none">
                        {themeOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleThemeChange(option.value)}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                role="menuitem">
                                {React.createElement(option.icon, {
                                    className: "mr-3",
                                })}
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThemeToggleButton;
