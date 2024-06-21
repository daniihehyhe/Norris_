"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FaTimes } from "react-icons/fa";
import Arrow_long_right from "@/../public/images/Arrow_long_right.png";
import Image from "next/image";
interface ContactModalProps {
    showModal: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ showModal, onClose }) => {
    const t = useTranslations();

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
                showModal ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
            <div
                className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300"
                onClick={onClose}></div>
            <div
                className={`relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl z-10 max-w-md w-full transition-transform duration-300 transform ${
                    showModal ? "translate-y-0" : "-translate-y-10"
                }`}>
                <button
                    className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 hover:text-red-500"
                    onClick={onClose}>
                    <FaTimes className="w-6 h-6" />
                </button>
                <h2 className="text-lg mb-4 dark:text-white text-center font-semibold">
                    {t("header.leavePhone")}
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                            {t("contactModal_nameLabel")}
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            type="text"
                            placeholder={t("contactModal_nameLabel")}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                            {t("contactModal_emailLabel")}
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            type="email"
                            placeholder={t("contactModal_emailLabel")}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                            {t("contactModal_phoneLabel")}
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            type="tel"
                            placeholder={t("contactModal_phoneLabel")}
                        />
                    </div>
                    <p className="text-xs text-center mb-2">
                        {t("header.agreePolicy")}
                    </p>
                    <button className="btn mx-auto flex px-6 py-2 w-fit items-center justify-center">
                        {t("header.submitButton")}
                        <Image
                            className="ml-5"
                            src={Arrow_long_right}
                            width={40}
                            height={20}
                            alt="Arrow_long_right"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
