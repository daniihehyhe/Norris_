"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { FaTimes } from "react-icons/fa";
import Arrow_long_right from "@/../public/images/Arrow_long_right.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SocialLink from "./SocialLink";

interface ContactModalProps {
    showModal: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ showModal, onClose }) => {
    const t = useTranslations("contactModal");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const lastSentTime = localStorage.getItem("lastSentTime");
        if (lastSentTime) {
            const elapsedTime = Date.now() - parseInt(lastSentTime);
            if (elapsedTime < 10  * 1000) {
                setMessage(t("sendMessageTooFrequent"));
                setIsDisabled(true);
            }
        }
    }, []);

    const validateForm = () => {
        if (!name || !phone) {
            setMessage(t("fillFields"));
            return false;
        }
        if (!/^\d{9,}$/.test(phone)) {
            setMessage(t("invalidPhone"));
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm() || isSending) return;

        console.log('Sending request with data:', { name, phone });
        setIsSending(true);

        const response = await fetch('/api/send_whatsapp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone }),
        });

        if (response.ok) {
            setMessage(t("sendMessageSuccess"));
            localStorage.setItem("lastSentTime", Date.now().toString());
            setIsDisabled(true);
            setTimeout(() => setIsDisabled(false), 20 * 60 * 1000);
            console.log('WhatsApp message sent successfully');
        } else if (response.status === 429) {
            setMessage(t("sendMessageTooFrequent"));
        } else {
            setMessage(t("sendMessageError"));
            console.error('Error sending WhatsApp message');
        }

        setTimeout(() => setIsSending(false), 7000);
    };

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                        onClick={onClose}></div>
                    <motion.div
                        initial={{ y: "30%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "30%", opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl z-10 max-w-md w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 hover:text-red-500"
                            onClick={onClose}>
                            <FaTimes className="w-6 h-6" />
                        </button>
                        <h2 className="text-lg mb-4 dark:text-white text-center font-semibold">
                            {t("leavePhone")}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                                    {t("nameLabel")}
                                </label>
                                <input
                                    className="shadow appearance-none border border-gray-300 dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-00 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                    type="text"
                                    placeholder={t("nameLabel")}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                                    {t("phoneLabel")}
                                </label>
                                <input
                                    className="shadow appearance-none border border-gray-300 dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-600 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                    type="tel"
                                    placeholder={t("phoneLabel")}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <p className="text-xs text-center mb-2">
                                {t("agreePolicy")}
                            </p>
                            <button 
    type="submit" 
    title={t("submitButton")} 
    className={`btn flex self-center px-6 mx-auto mb-3 py-2 w-fit items-center justify-center ${isSending || isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-moss_green_dark'}`}
    disabled={isSending || isDisabled}>
    {t("submitButton")}
    <Image loading='lazy'
        className="ml-10 w-auto"
        src={Arrow_long_right}

        width={40}
        height={20}
        alt="Arrow_long_right"
    />
</button>

                            {message && <p className="text-center mt-4">{message}</p>}
                            <SocialLink />
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
