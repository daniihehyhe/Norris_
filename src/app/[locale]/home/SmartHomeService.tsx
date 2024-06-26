'use client'
import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useAnimation } from "framer-motion";
import { Translations } from "@/types/translations";

const SmartHomeService: React.FC = () => {
    const t = useTranslations("SmartHomeServices");
    const keys: (keyof Translations["SmartHomeServices"])[] = [
        "camera",
        "security",
        "smartSpeakers",
        "sensors",
        "curtainsLighting",
    ];

    return (
        <div className="space-y-24 py-16 bg-gray-100 dark:bg-gray-900 px-6 md:px-12">
            {keys.map((key, index) => {
                const title = t(`${key}.title`);
                const description = t(`${key}.description`);
                const image = t(`${key}.image`);

                if (
                    typeof title !== "string" ||
                    typeof description !== "string" ||
                    typeof image !== "string"
                ) {
                    console.error(`Invalid translation value for key: ${key}`);
                    return null;
                }

                return (
                    <ServiceBlock
                        key={key}
                        title={title}
                        description={description}
                        image={image}
                        reverse={index % 2 === 1}
                    />
                );
            })}
        </div>
    );
};

interface ServiceBlockProps {
    title: string;
    description: string;
    image: string;
    reverse: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
    title,
    description,
    image,
    reverse,
}) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                controls.start("visible");
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run once on mount to check initial position

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={clsx(
                "flex flex-col md:flex-row items-center",
                reverse ? "md:flex-row-reverse" : "",
            )}>
            <div className="w-full md:w-1/2 p-4">
                <Image
                    src={`/images/slider/${image}`}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="w-full md:w-1/2 p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    {title}
                </h2>
                <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default SmartHomeService;
