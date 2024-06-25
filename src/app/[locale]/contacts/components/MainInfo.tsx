"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaUserAlt,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

function MainInfo() {
    const t = useTranslations('contactUs')

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-20 pb-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl font-bold mb-4">
                        {t('contactUs')}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-lg">
                     {t("linkOrOffice")}
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-orange-500 text-5xl mr-4" />
                            <div>
                                <h3 className="text-2xl font-bold mb-1">
                                    {t("phoneLabel")}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                +(996)553-228-888
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <FaClock className="text-orange-500 inline-block mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">
                               {t("monFri")}
                            </span>
                        </div>
                        <div className="mt-2">
                            <FaUserAlt className="text-orange-500 inline-block mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">
                                Джангирбеков Сейтек , {t("customerService")}
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-orange-500 text-5xl mr-4" />
                            <div>
                                <h3 className="text-2xl font-bold mb-1">
                                    {t('emailLabel')},
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    sale@norris.com
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <FaClock className="text-orange-500 inline-block mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">
                                {t("support247")}
                            </span>
                        </div>
                        <div className="mt-2">
                            <FaUserAlt className="text-orange-500 inline-block mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">
                                Сыдыкбекова Бермет, {t("supportManager")}
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-orange-500 text-5xl mr-4" />
                            <div>
                                <h3 className="text-2xl font-bold mb-1">
                                    Locatio{t("location")}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                               {t("address")}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <FaClock className="text-orange-500 inline-block mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">
                               {t("monFri")}
                            </span>
                        </div>
                        <div className="mt-2">
                            <FaUserAlt className="text-orange-500 inline-block mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">
                            Сыдыкбекова Бермет, {t("officeManager")}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
  )
}

export default MainInfo