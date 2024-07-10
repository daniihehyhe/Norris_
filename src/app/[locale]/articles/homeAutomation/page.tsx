import React from "react";
import Image from 'next/image';
import { FaWater, FaUser, FaLightbulb,  FaPlug, FaMobileAlt, FaDesktop,  FaRegDotCircle, FaThermometerHalf, FaFire, FaShieldAlt, FaSun, FaRobot, FaMusic, FaCogs, FaClipboardCheck, FaHandsHelping, FaHandshake } from "react-icons/fa";
import smart_home from '@public/assets/smart_home.jpeg';
import auto_light from '@public/images/auto_light.jpg';
import { useTranslations } from "next-intl";

const HomeAutomation: React.FC = () => {
    const t = useTranslations("HomeAutomation")
    return (
        <div className="container mx-auto px-4 py-8  rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
                {t("title")}
            </h2>
            <div className="flex justify-center mb-6">
                <Image src={smart_home} alt={t("imageAlt1")} className="rounded-lg shadow-md w-full h-64 object-cover" />
            </div>
            <p className="text-lg mb-4 ">
                {t("intro")}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t("automationTitle")}
            </h3>
            <p className="text-lg mb-4 ">
                {t("automationDescription")}
            </p>
            <p className="text-lg mb-4 ">
                {t("smartHomeDescription")}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaWater className="inline-block text-blue-500 mr-2" /> {t("features.feature1")} </li>
                <li><FaUser className="inline-block text-blue-500 mr-2" /> {t("features.feature2")}</li>
                <li><FaRegDotCircle className="inline-block text-blue-500 mr-2" /> {t("features.feature3")}</li>
                <li><FaPlug className="inline-block text-blue-500 mr-2" /> {t("features.feature4")}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t("controlMethodsTitle")}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaMobileAlt className="inline-block text-blue-500 mr-2" /> {t("controlMethods.method1")} </li>
                <li><FaDesktop className="inline-block text-blue-500 mr-2" />{t("controlMethods.method2")}</li>
                <li><FaCogs className="inline-block text-blue-500 mr-2" /> {t("controlMethods.method3")}</li>
                <li><FaRegDotCircle className="inline-block text-blue-500 mr-2" /> {t("controlMethods.method4")}</li>
                <li><FaRegDotCircle className="inline-block text-blue-500 mr-2" /> {t("controlMethods.method5")}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t("combinationMethods")}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t("capabilitiesTitle")} </h3>
            <div className="flex justify-center mb-6">
                <Image src={auto_light} alt={t("imageAlt2")} className="rounded-lg shadow-md w-full h-64 object-cover" />
            </div>
            <p className="text-lg mb-4 ">
                {t("capabilitiesDescription")}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaFire className="inline-block text-red-500 mr-2" /> {t("capabilities.capability1")} </li>
                <li><FaShieldAlt className="inline-block text-green-500 mr-2" /> {t("capabilities.capability1")}</li>
                <li><FaSun className="inline-block text-yellow-500 mr-2" /> {t("capabilities.capability3")}</li>
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2" /> {t("capabilities.capability4")}</li>
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2" />{t("capabilities.capability5")}</li>
                <li><FaRobot className="inline-block text-gray-500 mr-2" /> {t("capabilities.capability6")}</li>
                <li><FaMusic className="inline-block text-pink-500 mr-2" />{t("capabilities.capability7")}</li>
                <li><FaLightbulb className="inline-block text-yellow-500 mr-2" /> {t("capabilities.capability8")}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t("comfortDescription")}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Что мы предлагаем?</h3>
            <p className="text-lg mb-4 ">
                {t("offerDescription")}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaClipboardCheck className="inline-block text-blue-500 mr-2" /> {t("offers.offer1")} </li>
                <li><FaHandsHelping className="inline-block text-blue-500 mr-2" /> {t("offers.offer2")}</li>
                <li><FaHandshake className="inline-block text-blue-500 mr-2" /> {t("offers.offer3")}</li>
                <li><FaClipboardCheck className="inline-block text-blue-500 mr-2" /> {t("offers.offer4")}</li>
            </ul>
            <p className="text-lg mb-4 ">
               {t("conclusion")}
            </p>
        </div>
    );
};

export default HomeAutomation;
