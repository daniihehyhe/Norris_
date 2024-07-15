// components/SmartHome.tsx
// Системы «умный дом» от Компании Норрис с заботой о ваших близких
// К отличительным качествам ее можно отнести.
// Основные функции «умных домов»
// Какие услуги предоставляет наша компания?


import Image from 'next/image';
import React from 'react';
import phone_smart_home from '@/../public/images/phone_smart_home.png';
import flat from '@/../public/images/flat.jpg';
import smart_home from '@/../public/assets/smart_home.jpeg';

import { FcPlus } from 'react-icons/fc';
import { HiSparkles } from 'react-icons/hi';
import { FaBahai } from 'react-icons/fa6';
import { ImQuotesRight } from 'react-icons/im';
import { LuLayoutDashboard } from 'react-icons/lu';
import { LuSiren } from "react-icons/lu";
import { BsHouseDoor } from "react-icons/bs";
import { VscThumbsup } from "react-icons/vsc";
import LetterByLetter from '@/components/LetterByLetter';
import { FaHammer } from "react-icons/fa6";
import { useTranslations } from 'next-intl';


const SmartHomeServiceCaring: React.FC = () => {
    const t = useTranslations("SmartHomeServiceCaring")
   return (
      <main >


{/* Системы «умный дом» от Компании Норрис с заботой о ваших близких */}

         <section>
            <p className="text-titleText font-bold mb-4 text-center">
               {t("title")}
            </p>
            <div className="flex items-center">
               <Image loading='lazy'
               className='hidden  md:block'
                  src={phone_smart_home}
                  width={300}
                  alt="phone smart home"
               />
               <p className="text-subText italic mb-4">
                  {t("description")}
               </p>
            </div>
            <div className=" w-11/12 h-80 relative  ">
               <Image loading='lazy'
                  className="object-cover"
                  src={flat}
                  alt="flat"
                  fill
               />
            </div>
            <ul className="text-title2Text  my-10">
               <li className="flex items-center">
                  {' '}
                  <FaBahai className="mr-5 text-orange-500" /> {t("highlight1")}
               </li>
               <li className="flex items-center">
                  {' '}
                  <FaBahai className="mr-5 text-orange-500" />{' '}
                  {t("highlight2")}
               </li>
               <li className="flex items-center">
                  {' '}
                  <FaBahai className="mr-5 text-orange-500" />{' '}
                  {t("highlight3")}
               </li>
            </ul>

            {/* К отличительным качествам ее можно отнести. */}



            <div>
         <p className="text-title2Text flex italic font-bold mb-4 w-9/12">
            {t("distinctiveQualitiesTitle")} <FcPlus className="text-titleText animate-pulse" />
         </p>
         <ul className="text-subText my-10">
            <li className="flex items-center">
               <FcPlus className="mr-5 fixed-icon-size text-orange-500" />
               {t("distinctiveQualities1")}
            </li>
            <li className="flex items-center">
               <FcPlus className="mr-5 fixed-icon-size text-orange-500" />
               {t("distinctiveQualities2")}
            </li>
            <li className="flex items-center">
               <FcPlus className="mr-5 fixed-icon-size text-orange-500" />
               {t("distinctiveQualities3")}
            </li>
            <li className="flex items-center">
               <FcPlus className="mr-5 fixed-icon-size text-orange-500" />
               {t("distinctiveQualities4")}
            </li>
         </ul>

         <p className="text-title2Text mb-4 md:w-11/12">
            <ImQuotesRight className="text-black text-xl md:text-2xl m-5 float-start mr-4" />
            {t("controlOptions")}
         </p>
      </div>
         </section>



            <div className="text-titleText font-bold mb-4 flex items-center">
            {t("mainFunctionsTitle")}
               <HiSparkles className="ml-5 text-4xl animate-pulse" />
            </div>
            <section className="flex">
               <div>
                  <p className="text-title2Text mb-4 italic">
                  {t("mainFunctionsDescription")}
                  </p>
                  <ul className="flex flex-col gap-5 mb-4 text-subText">
                     <li className="flex items-center">
                        <LuLayoutDashboard className='mr-5  fixed-icon-size  text-blue-500' /> {t("function1")}
                     </li>
                     <li className="flex items-center">
                        <LuLayoutDashboard className='mr-5 fixed-icon-size    text-blue-500' />
                        {t("function2")}
                     </li>
                     <li className="flex items-center">
                        <LuLayoutDashboard className='mr-5  fixed-icon-size  text-blue-500' />
                        {t("function3")}
                     </li>
                     <li className="flex items-center">
                        <LuLayoutDashboard className='mr-5  fixed-icon-size  text-blue-500' />
                        {t("function4")}
                     </li>
                  </ul>
               </div>
               <div className="relative ml-5 h-auto w-4/5">
                  <Image loading='lazy'
                     src={smart_home}
                     fill
                     className="hidden lg:block object-contain"
                     alt="smart home"
                  />
               </div>
            </section>

            {/* Основные функции «умных домов» */}

            <section className="mix-blend-multiply text-title2Text mb-4 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 p-8 md:p-12 text-white rounded-xl shadow-2xl">
         <div className='flex justify-between items-center mb-8 md:mb-12'>
            <div className='bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 md:w-24 md:h-24 p-3 md:p-5 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110'>
               <BsHouseDoor className='text-white animate-ping text-xl md:text-3xl'/>
            </div>
            <div className='bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 md:w-24 md:h-24 p-3 md:p-5 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110'>
               <BsHouseDoor className='text-white animate-ping text-xl md:text-3xl'/>
            </div>
         </div>
         <div className='p-2 md:p-10 text-center text-subText bg-white bg-opacity-10 rounded-lg shadow-inner'>
            <LetterByLetter>
               {t("sectionTitle")}
            </LetterByLetter>
         </div>
         <div className='flex justify-between items-center mt-8 md:mt-12'>
            <div className='bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 md:w-24 md:h-24 p-3 md:p-5 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110'>
               <LuSiren className='text-white animate-ping text-xl md:text-3xl'/>
            </div>
            <div className='bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 md:w-24 md:h-24 p-3 md:p-5 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110'>
               <LuSiren className='text-white animate-ping text-xl md:text-3xl'/>
            </div>
         </div>
      </section>



            <p className="text-subText bg-green-700 text-white italic my-5 p-10">
               {t("sectionDescription")}
            </p>




            {/* Какие услуги предоставляет наша компания? */}
            <section className='bg-gradient-to-r from-yellow-600 via-orange-700 to-red-800 p-6 md:p-10 rounded-xl shadow-2xl text-gray-300'>
         <p className="text-titleText font-bold mb-4 text-center md:text-left">
            {t("serviceList")}
         </p>
         <p className="text-title2Text mb-4 text-center md:text-left">
            {t("serviceListDescription")}
         </p>
         <ul className="flex flex-col gap-4 text-subText mb-4">
            <li className='flex items-center bg-white bg-opacity-10 p-2 rounded-lg shadow-inner'>
               <VscThumbsup className='mr-5 text-yellow-200 fixed-icon-size' />
               {t("benefit1")}
            </li>
            <li className='flex items-center bg-white bg-opacity-10 p-2 rounded-lg shadow-inner'>
               <VscThumbsup className='mr-5 text-yellow-200 fixed-icon-size' />
               {t("benefit2")}
            </li>
            <li className='flex items-center bg-white bg-opacity-10 p-2 rounded-lg shadow-inner'>
               <VscThumbsup className='mr-5 text-yellow-200 fixed-icon-size' />
               {t("benefit3")}
            </li>
         </ul>
         <p className="text-title2Text italic mb-4 text-center md:text-left">
            {t("serviceCostDescription")}
         </p>
         <ul className="text-subText mb-4">
            <li className='flex items-center bg-white bg-opacity-10 p-2 rounded-lg shadow-inner mb-2'>
               <FaHammer className='mr-5 text-amber-400 fixed-icon-size' />
               {t("servicesList1")}
            </li>
            <li className='flex items-center bg-white bg-opacity-10 p-2 rounded-lg shadow-inner mb-2'>
               <FaHammer className='mr-5 text-amber-400 fixed-icon-size' />
               {t("servicesList2")}
            </li>
            <li className='flex items-center bg-white bg-opacity-10 p-2 rounded-lg shadow-inner mb-2'>
               <FaHammer className='mr-5 text-amber-400 fixed-icon-size' />
               {t("servicesList3")}
            </li>
            <li className='flex items-center bg-white bg-opacity-10 p-2 rounded-lg shadow-inner mb-2'>
               <FaHammer className='mr-5 text-amber-400 fixed-icon-size' />
               {t("servicesList4")}
            </li>
         </ul>
         <p className="text-title2Text italic mb-4 text-center md:text-left">
            {t("contactUs")}
         </p>
      </section>
      </main>
   );
};

export default SmartHomeServiceCaring;
