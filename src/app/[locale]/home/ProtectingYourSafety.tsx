'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

import blinds from '@/../public/images/slider/blinds.jpeg';
import radio from '@/../public/images/slider/radio.jpeg';
import house from '@/../public/images/slider/house.jpg';
import gate from '@/../public/images/slider/gate.jpg';
import gate1 from '@/../public/images/slider/l_3.jpg';


function ProtectingYourSafety() {
  return (
    <main className="container mx-auto p-6">
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">
          Защитить своих близких от опасности, имущество от хищений поможет Smart house, или "умный дом"
        </h2>
        <p className="mb-4">
          Это — современная автоматизированная многофункциональная система, устанавливаемая:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>В городских квартирах.</li>
          <li>Частных домовладениях.</li>
          <li>В офисах, банках.</li>
          <li>На предприятиях.</li>
          <li>В торговых, складских помещениях.</li>
          <li>На объектах особой секретности.</li>
        </ul>
        <p>В комплектацию ОПС «умного дома» входят:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Камеры наблюдения, видеодомофоны.</li>
          <li>Датчики движения, дыма, газоуловители и другие приборы.</li>
        </ul>
        <p>
          Размещают устройства на внутренних, наружных стенах зданий, прилегающих к ним территориях, а также на
          воротах, ограждающих конструкциях. Показания приборов, записи с видеокамер в реальном времени поступают
          на управляющий блок, сохраняются в архиве. Видеотехника может работать как в непрерывном режиме, так и
          включаться в определенные часы, например, только в вечернее, ночное время. В случае возникновения опасной
          ситуации "умная" техника подает тревожный сигнал, предает информацию в службу охраны. Владельцы помещения
          оповещаются о тревоге электронным письмом, получают на телефон уведомление, сообщение WhatsApp или
          СМС-сообщение.
        </p>
      </motion.div>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <Image src={blinds} alt="Blinds" width={600} height={400} className="w-full h-48 object-cover" priority  />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Blinds</h3>
          <p>Автоматические жалюзи для вашего дома.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <Image src={radio} alt="Radio" width={600} height={400} className="w-full h-48 object-cover" priority  />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Radio</h3>
          <p>Система радиоуправления для вашего комфорта.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <Image src={house} alt="House" width={600} height={400} className="w-full h-48 object-cover" priority  />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">House</h3>
          <p>Современный умный дом с автоматизированными системами.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <Image src={gate} alt="Gate" width={600} height={400} className="w-full h-48 object-cover" priority />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Gate</h3>
          <p>Умные ворота для надежной охраны территории.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <Image src={gate1} alt="Gate 1" width={600} height={400} className="w-full h-48 object-cover" priority />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Gate 1</h3>
          <p>Еще один вариант умных ворот для вашего дома.</p>
        </div>
      </motion.div>
    </section>
  </main>
  )
}

export default ProtectingYourSafety