import React from "react";
import { FaCogs, FaInfoCircle, FaClipboardCheck, FaFileAlt, FaClock, FaUserShield, FaTools, FaLaptopCode } from "react-icons/fa";
import { useTranslations } from 'next-intl';

const SmartHomeProject: React.FC = () => {
    const t = useTranslations('SmartHomeProject');
    
    return (
        <div className="container mx-auto px-4 py-8 pt-20  rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
                {t('title')}
            </h2>
            <p className="text-lg mb-4 ">
                {t('intro')}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t('section1Title')}
            </h3>
            <p className="text-lg mb-4 ">
                {t('section1Description')}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaCogs className="inline-block text-blue-500 mr-2" /> {t('features.feature1')}</li>
                <li><FaInfoCircle className="inline-block text-blue-500 mr-2" /> {t('features.feature2')}</li>
                <li><FaClipboardCheck className="inline-block text-blue-500 mr-2" /> {t('features.feature3')}</li>
                <li><FaFileAlt className="inline-block text-blue-500 mr-2" /> {t('features.feature4')}</li>
                <li><FaLaptopCode className="inline-block text-blue-500 mr-2" /> {t('features.feature5')}</li>
                <li><FaTools className="inline-block text-blue-500 mr-2" /> {t('features.feature6')}</li>
            </ul>
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
                <li>
                    <FaInfoCircle className="inline-block text-blue-500 mr-2" />
                    <strong>{t('steps.step1')}</strong>
                </li>
                <li>
                    <FaFileAlt className="inline-block text-blue-500 mr-2" />
                    <strong>{t('steps.step2')}</strong>
                </li>
                <li>
                    <FaClipboardCheck className="inline-block text-blue-500 mr-2" />
                    <strong>{t('steps.step3')}</strong>
                </li>
                <li>
                    <FaClock className="inline-block text-blue-500 mr-2" />
                    <strong>{t('steps.step4')}</strong>
                </li>
            </ul>
            <p className="text-lg mb-4 ">
                {t('section4Title')}
            </p>
            <p className="text-lg mb-4 ">
                {t('section4Description')}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaUserShield className="inline-block text-blue-500 mr-2" /> {t('advantages.advantage1')}</li>
                <li><FaClipboardCheck className="inline-block text-blue-500 mr-2" /> {t('advantages.advantage2')}</li>
                <li><FaTools className="inline-block text-blue-500 mr-2" /> {t('advantages.advantage3')}</li>
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

export default SmartHomeProject;
