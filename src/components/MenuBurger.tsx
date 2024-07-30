import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import logo from "@/../public/images/logo_norris.png";
import whiteLogo from "@/../public/images/white_logo.png";
import Arrow_long_right from "@/../public/images/Arrow_long_right.png";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialLink from "./SocialLink";

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
  const tc = useTranslations("contactModal");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const lastSentTime = localStorage.getItem("lastSentTime");
    if (lastSentTime) {
      const elapsedTime = Date.now() - parseInt(lastSentTime);
      if (elapsedTime < 20 * 60 * 1000) {
        setMessage(
          "Вы можете отправлять сообщение не чаще, чем раз в 20 минут."
        );
        setIsDisabled(true);
      }
    }
  }, []);

  const menuItems: MenuItem[] = [
    { label: t("home"), link: "/" },
    { label: t("services"), link: "/services" },
    { label: t("aboutUs"), link: "/about" },
    { label: t("portfolio"), link: "/portfolio" },
    { label: t("articles"), link: "/articles" },
    { label: t("news"), link: "/news" },
    { label: t("contacts"), link: "/contacts" },
  ];

  const validateForm = () => {
    if (!name || !phone) {
      setMessage("Пожалуйста, заполните все поля.");
      return false;
    }
    if (!/^\d{9,}$/.test(phone)) {
      setMessage(
        "Номер телефона должен содержать только цифры и быть не менее 9 символов."
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSending) return;

    console.log("Sending request with data:", { name, phone });
    setIsSending(true);

    const response = await fetch("/api/send_whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    });

    if (response.ok) {
      setMessage("Сообщение в WhatsApp успешно отправлено!");
      localStorage.setItem("lastSentTime", Date.now().toString());
      setIsDisabled(true);
      setTimeout(() => setIsDisabled(false), 20 * 60 * 1000);
      console.log("WhatsApp message sent successfully");
    } else if (response.status === 429) {
      setMessage("Вы можете отправлять сообщение не чаще, чем раз в 20 минут.");
    } else {
      setMessage("Ошибка при отправке сообщения в WhatsApp.");
      console.error("Error sending WhatsApp message");
    }

    setTimeout(() => setIsSending(false), 7000);
  };

  return (
    <main className="fixed top-0 left-0 h-screen z-50 w-full bg-gray-200 dark:bg-gray-900 p-4 md:mx-auto overflow-y-auto">
      <section className="flex container mx-auto relative flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between items-center md:mb-5">
        <Link href="/"  rel="canonical">
          <Image loading='lazy'
            onClick={onClose}
            src={theme === "light" ? logo.src : whiteLogo.src}
            width={150}
            height={70}
            alt="logo_norris.kg"
            className="hidden lg:block w-auto"
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-8 mb-4 md:mb-0">
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>
        <Link
          href="tel:+996553228888"
          className="flex items-center text-lg ml-4 md:ml-0 mb-4 md:mb-0"
        >
          <FaPhoneVolume className="dark:text-white mr-2 md:mr-4" />
          <span className="tracking-wider">+996553228888</span>
        </Link>
        <button
          onClick={onClose}
          className="text-4xl self-end md:mr-5 hover:text-red-500"
        >
          <RiCloseLargeLine />
        </button>
      </section>
      <section className="flex container mx-auto flex-col md:flex-row items-center justify-between">
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-10 md:mb-0">
          {menuItems.map((item, index) => (
            <Link
              onClick={onClose}
              key={index}
              href={item.link}
              className="w-fit text-xl md:text-3xl default-border  py-2 hover:border-b-2 dark:hover:border-blue-500  hover:border-yellow-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <form
          className="flex self-start flex-col gap-5 p-6 bg-gray-800 rounded-lg w-full max-w-md md:mx-auto"
          onSubmit={handleSubmit}
        >
          <p className="text-lg text-white text-center">{tc("leavePhone")}</p>
          <div>
            <label
              className="block text-white text-lg font-bold mb-2"
              htmlFor="name"
            >
              {tc("nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              placeholder={tc("nameLabel")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              className="block text-white text-lg font-bold mb-2"
              htmlFor="phone"
            >
              {tc("phoneLabel")}
            </label>
            <input
              type="tel"
              id="phone"
              placeholder={tc("phoneLabel")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button 
    type="submit" 
    title={tc("submitButton")} 
    className={`btn flex self-center px-6 py-2 w-fit items-center justify-center ${isSending || isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-moss_green_dark'}`}
    disabled={isSending || isDisabled}>
    {tc("submitButton")}
    <Image loading='lazy'
        className="ml-10 w-auto"
        src={Arrow_long_right}
        width={40}
        height={20}
        alt="Arrow_long_right"
    />
</button>

          {message && <p className="text-center mt-4 text-white">{message}</p>}
          <p className="text-sm text-white text-center">{tc("agreePolicy")}</p>
        </form>
      </section>
      <footer className="flex flex-col container mx-auto md:flex-row justify-between items-center mt-10">
        <Link
          href="#"
          className="flex items-center text-2xl md:text-3xl mb-4 md:mb-0"
        >
          <MdLocationOn className="mr-2" /> {t("location")} 177
        </Link>
        <span className="flex items-center text-2xl">
          <HiOutlineMail className="mr-2 " /> sale@norris.kg
        </span>
        <SocialLink />
      </footer>
    </main>
  );
};

export default MenuBurger;
