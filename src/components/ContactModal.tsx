"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FaTimes } from "react-icons/fa";

interface ContactModalProps {
    showModal: boolean;
    handleClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
    showModal,
    handleClose,
}) => {
    const t = useTranslations();

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${
                showModal ? "block" : "hidden"
            }`}>
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={handleClose}></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg z-10">
                <button
                    className="absolute top-2 right-2 text-gray-700 dark:text-gray-200"
                    onClick={handleClose}>
                    <FaTimes className="w-6 h-6" />
                </button>
                <h2 className="text-2xl mb-4 dark:text-white">
                    {t("contactModal_modalTitle")}
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                            {t("contactModal_nameLabel")}
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder={t("contactModal_nameLabel")}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                            {t("contactModal_emailLabel")}
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder={t("contactModal_emailLabel")}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                            {t("contactModal_phoneLabel")}
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="tel"
                            placeholder={t("contactModal_phoneLabel")}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        {t("contactModal_submitButton")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
