"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


interface Language {
    locale: "ru" | "en" | "kg" | "kz";
    label: string;
    flag: string;
}

const languages: Language[] = [
    { locale: "en", label: "english", flag: "/flag/en.png" },
    { locale: "ru", label: "russian", flag: "/flag/ru.png" },
    { locale: "kg", label: "kyrgyz", flag: "/flag/kg.png" },
    { locale: "kz", label: "kazakh", flag: "/flag/kz.png" },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const t = useTranslations();

    const handleLanguageChange = (locale: Language["locale"]) => {
        setIsOpen(false);
        router.replace(`/${locale}`);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}>
                    <span className="mr-2">{t("chooseLanguage")}</span>
                    <svg
                        className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${
                            isOpen ? "transform rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        {languages.map((language) => (
                            <Link
                                href={`/${language.locale}`}
                                key={language.locale}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={() =>
                                    handleLanguageChange(language.locale)
                                }>
                                <Image
                                    src={language.flag}
                                    alt={t(language.label)}
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                {t(language.label)}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
