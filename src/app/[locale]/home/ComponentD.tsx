'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import security from "@/../public/images/security.gif";
import card_bg from "@/../public/images/card_bg.webp";

const textVariants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariants = {
    hidden: { opacity: 0, y: 700 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ComponentD: React.FC = () => {
    return (
        <div
            className="relative flex flex-col justify-center items-center w-full h-screen p-8 bg-cover bg-center dark:bg-gray-900"
            style={{ backgroundImage: `url(${card_bg.src})` }}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-center p-4 bg-white bg-opacity-75 rounded-lg shadow-lg dark:bg-gray-800 dark:bg-opacity-75">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">
                    Датчики безопасности: дыма, протечки, газа, присутствия.
                    Камеры. Всё для безопасности и сохранности вашего имущества.
                </h1>
                <p className="text-lg dark:text-gray-300">
                    Современные системы безопасности включают датчики дыма,
                    протечки воды, газа и присутствия, а также камеры
                    видеонаблюдения. Эти технологии позволяют защитить ваш дом
                    или офис, сохраняя ваше имущество и обеспечивая спокойствие
                    в любых условиях.
                </p>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="absolute top-0 right-0 m-8">
                <Image loading='lazy'
                    src={security}
                    alt="Security Animation"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg w-auto"
                />
            </motion.div>
        </div>
    );
};

export default ComponentD;
