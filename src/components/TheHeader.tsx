"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@public/images/norris_logo_SITE_PNG.png";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { LuPhone } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function TheHeader() {
    const t = useTranslations("header");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

interface MenuItem {
    label: string;
    link: string;
}

    const menuItems: MenuItem[] = [
        { label: t("services"), link: "/services" },
        { label: t("aboutUs"), link: "/about" },
        { label: t("portfolio"), link: "/portfolio" },
        { label: t("articles"), link: "/articles" },
        { label: t("news"), link: "/news" },
        { label: t("contacts"), link: "/contacts" },
    ];
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerDirection: -1,
        },
    },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};
    return (
        <header
            className={`fixed w-full z-10 py-5 transition-all duration-300 ${
                isScrolled
                    ? "bg-gray-200 dark:bg-gray-900 dark:text-white"
                    : "bg-transparent text-green-700 shadow-md"
            }`}>
            <motion.section
                variants={container}
                initial="hidden"
                animate="show"
                className="w-11/12 mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4">
                    <Link href="/">
                        <Image
                            src={logo}
                            width={80}
                            height={100}
                            alt="logo_norris.kg"
                        />
                    </Link>
                    <Link
                        href="tel:+996553228888"
                        className="flex items-center ml-4">
                        <LuPhone className="dark:text-white mr-1" />
                        <span>+996 553 228 888</span>
                    </Link>
                </motion.div>
                <div className="hidden xl:flex md:items-center md:gap-5">
                    <nav className="flex gap-5 items-center">
                        {menuItems.map((item, index) => (
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 1.1 }}
                                drag="x"
                                dragConstraints={{ left: -100, right: 100 }}
                                key={index}
                                className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md">
                                <Link href={item.link}>{item.label}</Link>
                            </motion.div>
                        ))}
                    </nav>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4">
                        <ThemeToggleButton />
                        <LanguageSwitcher />
                    </motion.div>
                </div>
                <div className="xl:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md focus:outline-none">
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </motion.section>
            {isMenuOpen && (
                <div className="xl:hidden bg-gray-200 dark:bg-gray-900 py-4">
                    <div className="flex flex-col items-center gap-4 mb-4">
                        <ThemeToggleButton />
                        <LanguageSwitcher />
                    </div>
                    <nav className="flex flex-col items-start pl-5 gap-3">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className="w-full py-2 border-t border-gray-300 dark:border-gray-700">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default TheHeader;
