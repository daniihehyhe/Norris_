import React from "react";
import { useTranslations } from 'next-intl';
import { FaBolt, FaPlug, FaShieldAlt, FaFireExtinguisher, FaDesktop, FaDoorOpen, FaVideo } from "react-icons/fa";
import Image from 'next/image';
import smart_home from '/public/assets/smart_home.jpeg';
import auto_light from '/public/images/auto_light.jpg';

const PowerSystems: React.FC = () => {
    const t = useTranslations('PowerSystems');

    return (
        <div className="container mx-auto px-4 pt-20 py-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-900">
                {t('title')}
            </h1>
            <div className="flex justify-center mb-6">
                <Image loading='lazy' src={smart_home} alt={t('imageAlt')} className="rounded-lg shadow-md w-full h-64 object-cover" />
            </div>
            <h2 className="text-lg mb-4 ">
                {t('intro')}
            </h2>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('section1Title')}</h3>
            <h4 className="text-lg mb-4 ">
                {t('section1Description')}
            </h4>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaBolt className="inline-block text-blue-500 mr-2" /> {t('features.feature1')}</li>
                <li><FaPlug className="inline-block text-blue-500 mr-2" /> {t('features.feature2')}</li>
                <li><FaShieldAlt className="inline-block text-blue-500 mr-2" /> {t('features.feature3')}</li>
            </ul>
            <div className="flex justify-center mb-6">
                <Image loading='lazy' src={auto_light} alt={t('imageAlt2')} className="rounded-lg shadow-md w-full h-64 object-cover" />
            </div>
            <p className="text-lg mb-4 ">
                {t('section2Description')}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t('section3Title')}
            </h3>
            <p className="text-lg mb-4 ">
                {t('section3Description')}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaDesktop className="inline-block text-blue-500 mr-2" /> {t('lowVoltageSystems.system1')}</li>
                <li><FaDesktop className="inline-block text-blue-500 mr-2" /> {t('lowVoltageSystems.system2')}</li>
                <li><FaFireExtinguisher className="inline-block text-blue-500 mr-2" /> {t('lowVoltageSystems.system3')}</li>
                <li><FaDoorOpen className="inline-block text-blue-500 mr-2" /> {t('lowVoltageSystems.system4')}</li>
                <li><FaVideo className="inline-block text-blue-500 mr-2" /> {t('lowVoltageSystems.system5')}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t('section4Description')}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('section5Title')}</h3>
            <p className="text-lg mb-4 ">
                {t('section5Description1')}
            </p>
            <p className="text-lg mb-4 ">
                {t('section5Description2')}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaBolt className="inline-block text-blue-500 mr-2" /> {t('benefits.benefit1')}</li>
                <li><FaShieldAlt className="inline-block text-blue-500 mr-2" /> {t('benefits.benefit2')}</li>
                <li><FaBolt className="inline-block text-blue-500 mr-2" /> {t('benefits.benefit3')}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t('conclusion1')}
            </p>
            <p className="text-lg mb-4 ">
                {t('conclusion2')}
            </p>
        </div>
    );
};

export default PowerSystems;
