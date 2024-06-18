"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaLightbulb,
    FaShieldAlt,
    FaThermometerHalf,
    FaWifi,
    FaMobileAlt,
    FaCogs,
    FaMicrochip,
} from "react-icons/fa";
import smartHomeImage from "@/../public/images/bg_main.jpg";
import flatImage from "@/../public/images/flat.jpg";

const ServicesPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-screen">
                <Image
                    src={smartHomeImage}
                    alt="Smart Home"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-6xl font-bold mb-4">
                        Welcome to Smart Home
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-2xl mb-8">
                        Transforming Your Living Space with Cutting-Edge
                        Technology
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </motion.button>
                </div>
            </motion.div>

            <div className="py-16 px-8">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-center mb-12">
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: (
                                <FaLightbulb className="text-orange-500 text-5xl mb-4" />
                            ),
                            title: "Smart Lighting",
                            description:
                                "Control your home lighting with voice commands and smart devices for the perfect ambiance.",
                        },
                        {
                            icon: (
                                <FaShieldAlt className="text-orange-500 text-5xl mb-4" />
                            ),
                            title: "Home Security",
                            description:
                                "Keep your home safe with advanced security systems and real-time monitoring.",
                        },
                        {
                            icon: (
                                <FaThermometerHalf className="text-orange-500 text-5xl mb-4" />
                            ),
                            title: "Climate Control",
                            description:
                                "Maintain the perfect temperature in your home with smart thermostats and sensors.",
                        },
                        {
                            icon: (
                                <FaWifi className="text-orange-500 text-5xl mb-4" />
                            ),
                            title: "Connected Devices",
                            description:
                                "Integrate all your smart devices seamlessly for a truly connected home experience.",
                        },
                        {
                            icon: (
                                <FaMobileAlt className="text-orange-500 text-5xl mb-4" />
                            ),
                            title: "Mobile Control",
                            description:
                                "Control your smart home devices remotely using your smartphone or tablet.",
                        },
                        {
                            icon: (
                                <FaCogs className="text-orange-500 text-5xl mb-4" />
                            ),
                            title: "Automation Setup",
                            description:
                                "Automate your daily tasks with custom setups that fit your lifestyle.",
                        },
                        {
                            icon: (
                                <FaMicrochip className="text-orange-500 text-5xl mb-4" />
                            ),
                            title: "AI Integration",
                            description:
                                "Enhance your smart home with AI-powered features for a futuristic living experience.",
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            {service.icon}
                            <h3 className="text-2xl font-bold mb-2">
                                {service.title}
                            </h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="relative h-screen">
                <Image
                    src={flatImage}
                    alt="Modern Flat"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold mb-4">
                        Modern Living
                    </motion.h2>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-2xl mb-8">
                        Experience the future of home automation with our smart
                        home solutions.
                    </motion.p>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl mb-8">
                        Our smart home systems are designed to provide
                        convenience, security, and energy efficiency, all
                        tailored to your unique needs.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
