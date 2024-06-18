import React from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import flat2 from "@/../public/images/flat2.webp"; // Фоновое изображение

const plans = [
    {
        title: "Базовый План",
        description: "Идеально для новичков",
        price: "₽9",
        features: ["Функция 1", "Функция 2"],
        buttonLabel: "Выбрать план",
        buttonColor: "bg-indigo-500",
    },
    {
        title: "Про План",
        description: "Для продвинутых пользователей",
        price: "₽19",
        features: ["Функция 1", "Функция 2", "Функция 3"],
        buttonLabel: "Выбрать план",
        buttonColor: "bg-green-500",
    },
    {
        title: "Премиум План",
        description: "Для бизнеса",
        price: "₽29",
        features: ["Функция 1", "Функция 2", "Функция 3", "Функция 4"],
        buttonLabel: "Выбрать план",
        buttonColor: "bg-red-500",
    },
];

const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.3, // Задержка для поочередного появления
            duration: 0.6,
        },
    }),
};

const ComponentB: React.FC = () => {
    return (
        <div
            className="relative flex flex-col items-center w-full h-screen p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${flat2.src})` }}>
            <h1 className="text-4xl font-bold mb-8 dark:text-white">
                Наши тарифные планы
            </h1>
            <div className="flex  justify-center gap-4">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="w-full sm:w-1/2 lg:w-1/3">
                        <PricingCard
                            title={plan.title}
                            description={plan.description}
                            price={plan.price}
                            features={plan.features}
                            buttonLabel={plan.buttonLabel}
                            buttonColor={plan.buttonColor}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ComponentB;
