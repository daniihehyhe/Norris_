"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaHandsHelping,
    FaMoneyBillWave,
    FaTachometerAlt,
} from "react-icons/fa";
import BenefitsWorkingCompany from "./content/BenefitsWorkingCompany";
import FAQ from "./content/FAQ";



const AboutPage = () => {
   
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16">
            <p className="text-titleText font-semibold my-5 ml-3">
            История развития
            </p>
            <p className="text-subText ml-1">
            Мы подберем и настроим для вас оборудование, которое сделает ваш дом более комфортным и безопасным: освещение, камеры видеонаблюдения, умные замки, датчики протечек, температуры и движения. Спроектированные нами сценарии будут работать даже в ваше отсутствие.
            </p>
            <FAQ/>
            <BenefitsWorkingCompany/>
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
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-lg">
                        Learn more about our company and team here.
                    </motion.p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Founders</h2>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                        <h3 className="text-2xl font-bold mb-2">
                            Сергей Филин
                        </h3>
                        <p>Главный инженер ENCO Electric</p>
                        <p>
                            Закончил институт имени Баумана в 2013 году и
                            защитил диплом по автоматизации инженерных систем на
                            промышленных объектах.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                        <h3 className="text-2xl font-bold mb-2">
                            Антон Николин
                        </h3>
                        <p>Инженер-строитель, девелопер</p>
                        <p>
                            Построил более 30 коттеджей бизнес и премиум класса
                            под ключ. Специализация - автоматизация инженерных
                            систем, включая отопление, водоснабжение, вентиляцию
                            и кондиционирование. Опыт работы более 14 лет.
                        </p>
                    </motion.div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <FaHandsHelping className="text-orange-500 text-5xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-2">
                                Надежность
                            </h3>
                            <p>
                                За нами не придется исправлять. Наши проекты
                                проверены годами, то что сделано нашими
                                инженерами всегда работает без малейших сбоев!
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <FaMoneyBillWave className="text-orange-500 text-5xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-2">
                                Доступность
                            </h3>
                            <p>
                                Делаем передовые технологии будущего доступными!
                                С нашей помощью Умный дом уже не роскошь - вы
                                можете жить в современном умном доме Здесь и
                                Сейчас!
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <FaTachometerAlt className="text-orange-500 text-5xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-2">
                                Скорость
                            </h3>
                            <p>
                                Наша большая и сплоченная команда, а также
                                наличие всех комплектующих - дает возможность
                                быстро приступить и реализовать ваш Умный дом за
                                2 недели!
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Our Achievements
                    </h2>
                    <p>
                        Являемся партнерами коттеджных поселков в Москве и МО
                        таких как Резиденция Булатово, Гайд Парк, Фортопс,
                        Валуевская Слобода. Мы оцифровали и автоматизировали
                        более 100000 м2.
                    </p>
                    <p>
                        Среди наших заказчиков: РНФ, АО «Армо-групп», ООО
                        Наука-связь, ГБУ Жилищник, ООО Секъюрити-М, ООО «Аркон»,
                        ГУП «Мосгортранс».
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
                    <ul className="list-disc list-inside">
                        <li>4 патента;</li>
                        <li>1 изобретение;</li>
                        <li>
                            4 раза публиковались во всемирных изданиях Scopus и
                            Web of Science;
                        </li>
                        <li>
                            Свидетельство об участии во Всероссийском форуме
                            научной молодежи «Богатство России» от 2017 года;
                        </li>
                        <li>
                            Диплом за сотрудничество в организации проекта
                            «Умный дом», в рамках международной выставки HI-TECH
                            BUILDING от 2014 года;
                        </li>
                        <li>Участие в конференции в Барселоне в 2018 году.</li>
                    </ul>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Innovations</h2>
                    <p>За время работы было разработано и внедрено:</p>
                    <ul className="list-disc list-inside">
                        <li>контроллер управления и мониторинга;</li>
                        <li>плата освещения;</li>
                        <li>контроллер мониторинга;</li>
                        <li>
                            автономная система сбора данных по мощности
                            потребления 3-х фазных нагрузок;
                        </li>
                        <li>
                            последние 7 лет компания занимается проектированием,
                            монтажом и пусконаладкой электрических электрощитов
                            типа «Умный дом».
                        </li>
                    </ul>
                </div>
            </motion.div>


       
        </div>
    );
};

export default AboutPage;
