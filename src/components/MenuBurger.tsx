import Link from "next/link";
import React, { useEffect } from "react";
//import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import logo from "@/../public/images/logo_norris.png";
import whiteLogo from "@/../public/images/white_logo.png";
import Arrow_long_right from "@/../public/images/Arrow_long_right.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";


interface MenuProps {
    onClose: () => void;
}

const MenuBurger: React.FC<MenuProps> = ({ onClose }) => {
    interface MenuItem {
        label: string;
        link: string;
    }
    const { theme } = useTheme();
    const t = useTranslations("header");
    const menuItems: MenuItem[] = [
        { label: t("home"), link: "/" },
        { label: t("services"), link: "/services" },
        { label: t("aboutUs"), link: "/about" },
        { label: t("portfolio"), link: "/portfolio" },
        { label: t("articles"), link: "/articles" },
        { label: t("news"), link: "/news" },
        { label: t("contacts"), link: "/contacts" },
    ];


    return (
        <main className="fixed top-0 left-0 h-screen w-full bg-gray-200 dark:bg-blue-950 p-4 md:mx-auto overflow-y-auto">
            <section className="flex  container mx-auto  relative flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between items-center  md:mb-5">
                <Link href="/">
                    <Image
                        onClick={onClose}
                        src={theme === "light" ? logo.src : whiteLogo.src}
                        width={150}
                        height={70}
                        alt="logo_norris.kg"
                        className="hidden lg:block"
                    />
                </Link>
                <div className="flex  items-center gap-4 md:gap-8 mb-4 md:mb-0">
                    <LanguageSwitcher />
                    <ThemeToggleButton />
                </div>
                <Link
                    href="tel:+996553228888"
                    className="flex items-center text-lg ml-4 md:ml-0 mb-4 md:mb-0">
                    <FaPhoneVolume className="dark:text-white mr-2 md:mr-4" />
                    <span className="tracking-wider">+996553228888</span>
                </Link>
                <button
                    onClick={onClose}
                    className=" text-4xl self-end md:mr-5 hover:text-red-500">
                    <RiCloseLargeLine />
                </button>
            </section>
            <section className="flex  container mx-auto  flex-col md:flex-row items-center justify-between">
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-10 md:mb-0">
                    {menuItems.map((item, index) => (
                        <Link
                            onClick={onClose}
                            key={index}
                            href={item.link}
                            className="w-fit text-xl md:text-3xl py-2 hover:border-b-2 dark:hover:border-blue-500 hover:tracking-wider hover:border-yellow-600">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <form className="flex self-start flex-col gap-5 p-6 bg-gray-800 rounded-lg w-full max-w-md md:mx-auto">
                    <p className="text-lg text-white text-center">
                        {t("leavePhone")}
                    </p>
                    <div>
                        <label
                            className="block text-white text-lg font-bold mb-2"
                            htmlFor="name">
                            {t("nameLabel")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t("name")}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-white text-lg font-bold mb-2"
                            htmlFor="phone">
                            {t("phoneLabel")}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder={t("phone")}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-white text-lg font-bold mb-2"
                            htmlFor="email">
                            {t("emailLabel")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder={t("email")}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button className="btn flex self-center px-6 py-2 w-fit items-center justify-center">
                        {t("submitButton")}
                        <Image
                            className="ml-10"
                            src={Arrow_long_right}
                            width={40}
                            height={20}
                            alt="Arrow_long_right"
                        />
                    </button>
                    <p className="text-sm text-white text-center">
                        {t("agreePolicy")}
                    </p>
                </form>
            </section>
            <footer className="flex flex-col  container mx-auto  md:flex-row justify-between items-center mt-10">
                <Link
                    href="#"
                    className="flex items-center text-2xl md:text-3xl mb-4 md:mb-0">
                    <MdLocationOn className="mr-2" /> {t("location")} 177
                </Link>
                <span className="flex items-center text-2xl">
                    <HiOutlineMail className="mr-2 " /> sale@norris.kg
                </span>
                <div className="flex space-x-4">
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor">
                            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.404.597 24 1.325 24H12.82v-9.294H9.692V11.27h3.128v-2.26c0-3.1 1.894-4.788 4.658-4.788 1.324 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.714-1.796 1.763v2.311h3.591l-.467 3.436h-3.124V24h6.127C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        className="text-blue-400 hover:text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor">
                            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.723 9.867 9.867 0 01-3.127 1.195 4.92 4.92 0 00-8.385 4.482 13.956 13.956 0 01-10.141-5.146 4.822 4.822 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.14 1.523 4.15 3.78 4.587a4.936 4.936 0 01-2.224.085 4.936 4.936 0 004.604 3.42A9.867 9.867 0 010 21.542 13.94 13.94 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="text-pink-500 hover:text-pink-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.056 2.042.24 2.51.414a4.999 4.999 0 011.825 1.074 4.999 4.999 0 011.074 1.825c.175.468.359 1.304.414 2.51.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.24 2.042-.414 2.51a4.999 4.999 0 01-1.074 1.825 4.999 4.999 0 01-1.825 1.074c-.468.175-1.304.359-2.51.414-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-2.042-.24-2.51-.414a4.999 4.999 0 01-1.825-1.074 4.999 4.999 0 01-1.074-1.825c-.175-.468-.359-1.304-.414-2.51-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.206.24-2.042.414-2.51a4.999 4.999 0 011.074-1.825 4.999 4.999 0 011.825-1.074c.468-.175 1.304-.359 2.51-.414 1.265-.059 1.645-.07 4.849-.07M12 0C8.741 0 8.332.015 7.053.072c-1.273.058-2.15.26-2.908.548a6.992 6.992 0 00-2.611 1.709A6.992 6.992 0 00.072 7.053c-.287.757-.49 1.635-.548 2.908C-.015 8.332 0 8.741 0 12c0 3.259-.015 3.668.072 4.947.058 1.273.26 2.15.548 2.908a6.992 6.992 0 001.709 2.611 6.992 6.992 0 002.611 1.709c.757.287 1.635.49 2.908.548C8.332 23.985 8.741 24 12 24c3.259 0 3.668-.015 4.947-.072 1.273-.058 2.15-.26 2.908-.548a6.992 6.992 0 002.611-1.709 6.992 6.992 0 001.709-2.611c.287-.757.49-1.635.548-2.908C23.985 15.668 24 15.259 24 12c0-3.259.015-3.668-.072-4.947-.058-1.273-.26-2.15-.548-2.908a6.992 6.992 0 00-1.709-2.611A6.992 6.992 0 0019.947.548c-.757-.287-1.635-.49-2.908-.548C15.668-.015 15.259 0 12 0z" />
                            <path d="M12 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.123a3.96 3.96 0 1 1 0-7.921 3.96 3.96 0 0 1 0 7.92zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-blue-700 hover:text-blue-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor">
                            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zm-1.78-12.7c-1.14 0-1.84-.76-1.84-1.71 0-.97.73-1.72 1.88-1.72 1.16 0 1.84.75 1.85 1.72 0 .96-.69 1.71-1.89 1.71zm13.36 12.7h-3.55V14.8c0-1.42-.51-2.38-1.78-2.38-.97 0-1.54.65-1.8 1.28-.09.23-.11.55-.11.87v5.88H8.89V9H12v1.56c.41-.63 1.16-1.55 2.84-1.55 2.08 0 3.64 1.34 3.64 4.22v7.23z" />
                        </svg>
                    </Link>
                </div>
            </footer>
        </main>
    );
};

export default MenuBurger;
