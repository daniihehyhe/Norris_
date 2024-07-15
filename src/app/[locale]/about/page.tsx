'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
   FaHandsHelping,
   FaMoneyBillWave,
   FaTachometerAlt,
} from 'react-icons/fa';
import BenefitsWorkingCompany from './content/BenefitsWorkingCompany';
import FAQ from './content/FAQ';

const AboutPage = () => {
   return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16">
         <p className="text-titleText font-semibold my-5 ml-3">
            История развития
         </p>
         <p className="text-subText ml-1">
            Мы подберем и настроим для вас оборудование, которое
            сделает ваш дом более комфортным и безопасным: освещение,
            камеры видеонаблюдения, умные замки, датчики протечек,
            температуры и движения. Спроектированные нами сценарии
            будут работать даже в ваше отсутствие.
         </p>
         <FAQ />
         <BenefitsWorkingCompany />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4"
         >
            <div className="text-center mb-12">
               <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl font-bold mb-4"
               >
                  About Us
               </motion.h1>
               <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-lg"
               >
                  Learn more about our company and team here.
               </motion.p>
            </div>

            <div className="mb-12">
               <h2 className="text-3xl font-bold mb-4">Our Values</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                  >
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
                     className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                  >
                     <FaMoneyBillWave className="text-orange-500 text-5xl mb-4 mx-auto" />
                     <h3 className="text-2xl font-bold mb-2">
                        Доступность
                     </h3>
                     <p>
                        Делаем передовые технологии будущего
                        доступными! С нашей помощью Умный дом уже не
                        роскошь - вы можете жить в современном умном
                        доме Здесь и Сейчас!
                     </p>
                  </motion.div>
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                  >
                     <FaTachometerAlt className="text-orange-500 text-5xl mb-4 mx-auto" />
                     <h3 className="text-2xl font-bold mb-2">
                        Скорость
                     </h3>
                     <p>
                        Наша большая и сплоченная команда, а также
                        наличие всех комплектующих - дает возможность
                        быстро приступить и реализовать ваш Умный дом
                        за 2 недели!
                     </p>
                  </motion.div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default AboutPage;
