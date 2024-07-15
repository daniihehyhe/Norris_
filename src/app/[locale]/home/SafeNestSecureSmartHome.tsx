// Как защитить себя от злоумышленников?
// Возможности, преимущества
// Какие услуги мы предлагаем?





import React from 'react';
import offender from '@/../public/assets/offender.webp';
import Image from 'next/image';
import { FaExclamationTriangle } from 'react-icons/fa';
import layout_plan from '@/../public/images/layout_plan.webp';
import { LuPencilRuler } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";


function SafeNestSecureSmartHome() {
   const t = useTranslations("SafeNestSecureSmartHome")
   return (
      <>



         <main className="flex flex-col px-2">



         {/* Как защитить себя от злоумышленников? */}

            <section className="flex flex-col  md:flex-row mb-14 pt-20 justify-center items-start md:items-center">
               <div className="mb-5 md:mb-0 md:mr-5 w-20 md:w-96">
                  <Image loading='lazy'
                     src={offender}
                     alt="Smart Home"
                     layout="responsive"
                  />
               </div>
               <div>
                  <h1 className="text-titleText mb-5">
                     {t("title")}
                  </h1>
                  <p className="text-subText italic">
                     {t("description1")}
                  </p>
               </div>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10">
               <div className="md:w-1/2">
                  <p className="text-subText md:leading-8">
                     {t("description2")}
                  </p>
               </div>
               <ul className="xl:w-1/2 text-base text-subText text-black leading-loose list-none p-5 bg-gray-300">
                  <li className="flex items-center mb-2 ">
                     <FaExclamationTriangle className="text-yellow-500 text-2xl mr-4" />
                  {t("listItems1")}
                  </li>
                  <li className="flex items-center mb-2">
                     <FaExclamationTriangle className="text-yellow-500 text-2xl mr-4" />
                     {t("listItems2")}
                  </li>
                  <li className="flex items-center mb-2">
                     <FaExclamationTriangle className="text-yellow-500 text-2xl mr-4" />
                     {t("listItems3")}
                  </li>
                  <li className="flex items-center mb-2">
                     <FaExclamationTriangle className="text-yellow-500 text-2xl mr-4" />
                     {t("listItems4")}
                  </li>
               </ul>
            </section>
         </main>






         {/* Возможности, преимущества */}

         <main  className='flex flex-col lg:flex-row my-5 py-5'>
            <section className='lg:w-1/2 bg-teal-700 text-white p-5'>
<h4 className='text-gray-300 text-subText text-center mb-5 font-extrabold'>{t("advantagesTitle")}</h4>
<p className='text-subText italic p-5 border rounded-tr-3xl rounded-bl-3xl border-white'>{t("advantagesDescription")}
</p>

   <p className='bg-gradient-to-r rounded-tr-3xl rounded-bl-3xl from-indigo-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-5 my-5 text-black'>{t("communicationSafety")}</p>
   <p className='text-subText italic p-5 rounded-tr-3xl rounded-bl-3xl border border-white'>{t("accessControl")}</p>
   

            </section>

            <section className='lg:w-1/2 bg-slate-800 text-white p-5'>
            <p className='text-subText italic p-5 border rounded-tr-3xl rounded-bl-3xl border-white'>{t("perimeterProtection")}</p>
<p className='text-subText font-black '>
<ImQuotesLeft className='text-red-600 text-titleText m-5' />

{t("surveillance")}
<ImQuotesRight className='text-red-600 text-titleText m-5 float-end'  />
</p>


            </section>
         </main>


         {/* Какие услуги мы предлагаем? */}

         <main>
            <section
               className="flex  flex-col sm:px-5 xl:flex-row gap-3 xl:pb-5 mt-10 items-center justify-center bg-center bg-cover bg-no-repeat"
               style={{ backgroundImage: `url(${layout_plan.src})` }}
            >
               <div className="xl:w-1/2 bg-stone-600 mt-5 bg-opacity-95 text-white p-3">
                  <p className="text-titleText ">
                  {t("servicesTitle")}
                  </p>
                  <p className="text-contText">
                  {t("servicesDescription1")}
                  </p>
                  <p className="text-contText">
                  {t("servicesDescription2")}
                  </p>
               </div>

               <ul className="xl:w-1/2 mb-5 text-base text-subText text-white leading-loose list-none p-5 bg-green-900 bg-opacity-75">
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 text-2xl mr-4" />
                     {t("listServices1")}
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 text-2xl mr-4" />
                     {t("listServices2")}
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 text-2xl mr-4" />
                     {t("listServices3")}
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 text-2xl mr-4" />
                     {t("listServices4")}
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 text-2xl mr-4" />
                     {t("listServices5")}
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 text-2xl mr-4" />
                     {t("listServices6")}
                  </li>
               </ul>
            </section>
         </main>
      </>
   );
}

export default SafeNestSecureSmartHome;
