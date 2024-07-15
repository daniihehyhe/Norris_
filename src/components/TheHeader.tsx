"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@public/images/logo_norris.png";
import whiteLogo from "@public/images/white_logo.png";
import { useTranslations } from "next-intl";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import MenuBurger from "./MenuBurger";
import { useTheme } from "@/contexts/ThemeContext";
import CallbackRequest from "./CallbackRequest";
import ScrollToTopButton from "./ScrollToTopButton";
import ProgressWheel from "./ProgressWheel";

function TheHeader() {
    const { theme } = useTheme();
    const t = useTranslations("header");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
       useEffect(() => {
           if (isMenuOpen) {
               document.body.style.overflow = "hidden";
               } else {
               document.body.style.overflow = "auto";
           }
       }, [isMenuOpen]);
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

    const menuItemsWindowHeader: MenuItem[] = [
        { label: t("services"), link: "/services" },
        { label: t("aboutUs"), link: "/about" },
        { label: t("portfolio"), link: "/portfolio" },
        { label: t("articles"), link: "/articles" },
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

    return (
        <header
        className={`fixed w-full z-10 transition-all duration-300 p-2 ${
          isScrolled
            ? "bg-gray-200 dark:bg-gray-900 dark:text-white"
            : "bg-transparent  shadow-md"
        }`}
      >

                <CallbackRequest/>
            <motion.section
                variants={container}
                initial="hidden"
                animate="show"
                className="container mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4">
                    <Link  rel="noopener noreferrer" href="/">
                        <Image loading='lazy'
                            src={theme === "light" ? logo.src : whiteLogo.src}
                            width={100}
                            height={50}
                            className="w-auto"
                            alt="logo_norris.kg"
                        />
                    </Link>
                </motion.div>
                <div className="hidden xl:flex md:items-center md:gap-5">
                    <nav className="flex gap-5 items-center">
                        {menuItemsWindowHeader.map((item, index) => (
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 1.1 }}
                                drag="x"
                                dragConstraints={{ left: -100, right: 100 }}
                                key={index}
                                className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md">
                                <Link  rel="noopener noreferrer" href={item.link}>{item.label}</Link>
                            </motion.div>
                        ))}
                    </nav>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4">
                    <Link
                        href="#googleMap"
                        className="hidden sm:flex sm:items-center btn px-6 py-2">
                        <MdLocationOn className="mr-2" /> {t("location")} 177
                    </Link>
                    <Link
                        href="tel:+996553228888"
                        className="flex items-center ml-4">
                        <FaPhoneVolume className="dark:text-white mr-1" />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md focus:outline-none">
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </motion.div>
            </motion.section>

            {isMenuOpen && (
                <MenuBurger onClose={toggleMenu} />
            )}
            <ScrollToTopButton/>
            <ProgressWheel/>

        </header>
    );
}

export default TheHeader;
