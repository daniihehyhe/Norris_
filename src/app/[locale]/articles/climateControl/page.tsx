import React from "react";
import { FaThermometerHalf, FaFan, FaSolarPanel, FaWind } from "react-icons/fa";
import Image from 'next/image';
import flat from '@public/images/flat.jpg';
import flat2 from '@public/images/flat2.webp';
import layout_plan from '@public/images/layout_plan.webp';
import { useTranslations } from "next-intl";

const ClimateControl: React.FC = () => {
    const t = useTranslations("ClimateControl")
    return (
        <div className="container mx-auto px-4 py-8 pt-20  rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-900">
                {t("title")}
            </h1>
            <div className="flex justify-center mb-6">
                <Image src={flat} alt={t("imageAlt1")} className="rounded-lg shadow-md w-1/2" />
            </div>
            <h2 className="text-lg mb-4 ">
                {t("intro")}
            </h2>
            <h3 className="text-lg mb-4 ">
                {t("description1")}
            </h3>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2"/> {t("features.feature1")}</li>
                <li><FaFan className="inline-block text-blue-500 mr-2"/> {t("features.feature2")}</li>
                <li><FaSolarPanel className="inline-block text-blue-500 mr-2"/> {t("features.feature3")}</li>
                <li><FaWind className="inline-block text-blue-500 mr-2"/> {t("features.feature4")}</li>
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2"/> {t("features.feature5")}</li>
                <li><FaFan className="inline-block text-blue-500 mr-2"/> {t("features.feature6")}</li>
                <li><FaSolarPanel className="inline-block text-blue-500 mr-2"/> {t("features.feature7")}</li>
                <li><FaWind className="inline-block text-blue-500 mr-2"/> {t("features.feature8")}</li>
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2"/> {t("features.feature9")}</li>
                <li><FaFan className="inline-block text-blue-500 mr-2"/> {t("features.feature10")}.</li>
            </ul>
            <p className="text-lg mb-4 ">Управляется она при помощи:</p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2"/> {t("controlMethods.method1")} </li>
                <li><FaFan className="inline-block text-blue-500 mr-2"/> {t("controlMethods.method2")} </li>
                <li><FaSolarPanel className="inline-block text-blue-500 mr-2"/> {t("controlMethods.method3")}</li>
            </ul>
            <h4 className="text-lg mb-4 ">
                {t("description2")}
            </h4>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t("advantageTitle")} </h3>
            <div className="flex justify-center mb-6">
                <Image src={flat2} alt={t("imageAlt2")} className="rounded-lg shadow-md w-1/2" />
            </div>
            <p className="text-lg mb-4 ">
                {t("text")}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2"/> {t("advantages.advantage1")}
                </li>
                <li><FaFan className="inline-block text-blue-500 mr-2"/> {t("advantages.advantage2")}
                </li>
                <li><FaSolarPanel className="inline-block text-blue-500 mr-2"/> {t("advantages.advantage3")}
                </li>
                <li><FaWind className="inline-block text-blue-500 mr-2"/> {t("advantages.advantage4")}
                </li>
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2"/> {t("advantages.advantage5")}
                </li>
            </ul>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t("offersTitle")}
            </h3>
            <div className="flex justify-center mb-6">
                <Image src={layout_plan} alt={t("imageAlt3")} className="rounded-lg shadow-md w-1/2" />
            </div>
            <p className="text-lg mb-4 ">
                {t("offersDescription")}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaThermometerHalf className="inline-block text-blue-500 mr-2"/> {t("offerItems.item1")} </li>
                <li><FaFan className="inline-block text-blue-500 mr-2"/> {t("offerItems.item2")}</li>
                <li><FaSolarPanel className="inline-block text-blue-500 mr-2"/> {t("offerItems.item3")}</li>
                <li><FaWind className="inline-block text-blue-500 mr-2"/> {t("offerItems.item4")}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t("conclusion")}
            </p>
            <p className="text-lg mb-4 ">
            {t("text1")}
            </p>
        </div>
    );
};

export default ClimateControl;
