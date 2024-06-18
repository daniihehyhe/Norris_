"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import smartHomeImage from "@/../public/images/bg_main.jpg";
import flat from "@/../public/images/flat.jpg";

const projects = [
    {
        title: "Smart Home Project",
        description:
            "A comprehensive smart home setup with automated lighting, security, and climate control.",
        image: smartHomeImage,
    },
    {
        title: "Modern Apartment Design",
        description:
            "A sleek and modern apartment design with integrated smart home technology.",
        image: flat,
    },
    {
        title: "Home Office Setup",
        description:
            "An optimized home office setup with smart lighting and climate control for productivity.",
        image: smartHomeImage,
    },
    {
        title: "Luxury Living Room",
        description:
            "A luxury living room design featuring smart entertainment systems and ambient lighting.",
        image: flat,
    },
];

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const PortfolioPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl font-bold mb-4">
                        Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-lg">
                        Explore our projects and works here.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                                layout="responsive"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {project.description}
                                </p>
                                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                    More Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default PortfolioPage;
