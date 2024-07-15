import React from 'react'
import layout_plan from '@public/images/layout_plan.webp'
import flat from '@public/images/flat.jpg'
import flat2 from '@public/images/flat2.webp'
import Image from "next/image";
import { useTranslations } from 'next-intl';


function BenefitsWorkingCompany() {
    const t = useTranslations("BenefitsWorkingCompany")

  return (
    <main className=" flex flex-col items-center mx-auto px-10 py-8">
    <h1 className="text-title2Text font-bold mb-8">{t("title")} </h1>
    
    <section className="bg-moss_green pb-10  flex-col sm:w-11/12 lg:flex-row  justify-center items-center text-white flex p-3 lg:p-20 rounded-lg shadow-md mb-8">
      <p className="pb-10 lg:mb-0 lg:w-3/5 text-con">
        {t("section1.text")}
      </p>
      <div className=" lg:ml-20 relative w-60 h-52   lg:w-1/5  ">
      <Image loading='lazy' src={flat} alt="Smart Home" fill className="object-cover rounded-3xl" />
      <div className="absolute bg-norris_dark  -top-6 -left-10 px-4 py-1 rounded-3xl text-contText italic">{t("section1.label1")} </div>
      <div className=" absolute bg-norris_dark  -bottom-6 -right-10 px-4 py-1 rounded-3xl text-contText italic">{t("section1.label2")}</div>
      </div>

    </section>
    <section className="bg-moss_green pb-10  flex-col  lg:flex-row  justify-center items-center text-white flex p-3 lg:p-20 rounded-lg shadow-md mb-8">
      <p className="pb-10 lg:mb-0 lg:w-3/5 text-con">
      {t("section2.text")}
      </p>
      <div className=" lg:ml-20 relative w-60 h-52   lg:w-1/5  ">
      <Image loading='lazy'  src={flat2} alt="Smart Home" fill className="object-cover rounded-3xl" />
      <div className="absolute bg-norris_dark  -top-6 -left-10 px-4 py-1 rounded-3xl text-contText italic">{t("section2.label1")}</div>
      <div className=" absolute bg-norris_dark  -bottom-6 -right-10 px-4 py-1 rounded-3xl text-contText italic">{t("section2.label2")}</div>
      </div>

    </section>

    <section className="bg-moss_green pb-10  flex-col sm:w-11/12 lg:flex-row  justify-center items-center text-white flex p-3 lg:p-20 rounded-lg shadow-md mb-8">
      <p className="pb-10 lg:mb-0 lg:w-3/5 text-con">
      {t("section3.text")}
      </p>
      <div className=" lg:ml-20 relative w-60 h-52   lg:w-1/5  ">
      <Image loading='lazy' src={layout_plan} alt="Smart Home" fill className="object-cover rounded-3xl" />
      <div className="absolute bg-norris_dark  -top-6 -left-10 px-4 py-1 rounded-3xl text-contText italic">{t("section3.label1")}</div>
      <div className=" absolute bg-norris_dark  -bottom-6 -right-10 px-4 py-1 rounded-3xl text-contText italic">{t("section3.label2")}</div>
      </div>
    </section>
  </main>
  )
}

export default BenefitsWorkingCompany

