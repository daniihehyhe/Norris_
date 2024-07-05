'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import smartHomeImage from "@/../public/images/bg_main.jpg";
import flat from "@/../public/images/flat.jpg"; 
import { useTranslations } from "next-intl";

const textVariants = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageVariants = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const ComponentA: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const t = useTranslations();

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div
            className="relative flex flex-col md:flex-row justify-between items-center w-full h-screen p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${flat.src})` }}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex-1 p-4 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold dark:text-white">
                    Установка оборудования умного дома для дома и офиса
                </h1>
                <h2 className="text-2xl mt-4 dark:text-gray-300">
                    Управление и мониторинг дома из любой точки мира
                </h2>
                <button
                    className="mt-8 px-8 py-4 bg-blue-500 text-2xl text-white rounded hover:bg-blue-700 transition duration-300"
                    onClick={handleOpenModal}>
                    {t("contactButton")}
                </button>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="flex-1 p-4">
                <Image
                    src={smartHomeImage}
                    alt="Smart Home"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg w-auto"
                />
            </motion.div>
        </div>
    );
};

export default ComponentA;
