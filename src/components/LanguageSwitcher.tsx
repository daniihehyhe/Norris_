"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Language {
    locale: "ru" | "en" | "kg" | "kz";
    labelKey: any;
    flag: string;
}

const languages: Language[] = [
    { locale: "en", labelKey: "english", flag: "/flag/en.png" },
    { locale: "ru", labelKey: "russian", flag: "/flag/ru.png" },
    { locale: "kg", labelKey: "kyrgyz", flag: "/flag/kg.png" },
    { locale: "kz", labelKey: "kazakh", flag: "/flag/kz.png" },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const t = useTranslations("header");

    const handleLanguageChange = (locale: Language["locale"]) => {
        setIsOpen(false);

        // Remove the current locale from the pathname
        let segments = pathname ? pathname.split("/").filter(Boolean) : [];
        if (segments.length > 0 && ["en", "ru", "kg", "kz"].includes(segments[0])) {
            segments.shift();
        }

        // Build the new path with the selected locale
        const newPath = `/${locale}/${segments.join("/")}`;

        // Preserve query parameters
        const searchParamsString = searchParams ? searchParams.toString() : "";
        const newUrl = searchParamsString ? `${newPath}?${searchParamsString}` : newPath;

        router.replace(newUrl);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-500 dark:text-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="options-menu"
                    aria-expanded={isOpen}
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
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-500 dark:text-gray-200  ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        {languages.map((language) => (
                            <button
                                key={language.locale}
                                className="flex items-center px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                role="menuitem"
                                onClick={() =>
                                    handleLanguageChange(language.locale)
                                }>
                                <Image
                                    src={language.flag}
                                    alt={t(language.labelKey)}
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                {t(language.labelKey)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
