'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import lamp from "@/../public/images/lamp.gif";
import card_bg from "@/../public/images/card_bg.webp";



const textVariants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariants = {
    hidden: { opacity: 0, y: 700 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ComponentC: React.FC = () => {
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
                    Управление освещением с телефона, умных колонок и датчиков
                    присутствия под любые условия
                </h1>
                <p className="text-lg dark:text-gray-300">
                    Современные технологии позволяют управлять освещением вашего
                    дома или офиса с помощью телефона, голосовых команд через
                    умные колонки, такие как Алиса или Сири, а также с
                    использованием датчиков присутствия. Это обеспечивает
                    удобство, энергоэффективность и безопасность в любых
                    условиях.
                </p>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="absolute top-0 right-0 m-8">
                <Image
                    src={lamp}
                    alt="Lamp Animation"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg w-auto"
                    priority 
                />
            </motion.div>
        </div>
    );
};

export default ComponentC;
