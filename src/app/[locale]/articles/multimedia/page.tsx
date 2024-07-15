import React from "react";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaTv, FaCogs, FaMusic, FaFilm, FaCloudDownloadAlt, FaClipboardCheck, FaHeadphones, FaListUl, FaTools } from "react-icons/fa";
import multimediaImage from '@public/assets/smart_home.jpeg';

const Multimedia: React.FC = () => {
    const t = useTranslations('Multimedia');

    return (
        <div className="container mx-auto px-4 py-8 pt-20 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
                {t('title')}
            </h2>
            <div className="flex justify-center mb-6">
                <Image loading='lazy' src={multimediaImage} alt={t('imageAlt')} className="rounded-lg shadow-md w-full h-64 object-cover" />
            </div>
            <p className="text-lg mb-4 ">
                {t('intro')}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t('section1Title')}
            </h3>
            <p className="text-lg mb-4 ">
                {t('section1Description1')}
            </p>
            <p className="text-lg mb-4 ">
                {t('section1Description2')}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaTv className="inline-block text-blue-500 mr-2" /> {t('features.feature1')}</li>
                <li><FaTv className="inline-block text-blue-500 mr-2" /> {t('features.feature2')}</li>
                <li><FaTv className="inline-block text-blue-500 mr-2" /> {t('features.feature3')}</li>
                <li><FaTv className="inline-block text-blue-500 mr-2" /> {t('features.feature4')}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t('section1Description3')}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t('section2Title')}
            </h3>
            <p className="text-lg mb-4 ">
                {t('section2Description1')}
            </p>
            <p className="text-lg mb-4 ">
                {t('section2Description2')}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaTv className="inline-block text-blue-500 mr-2" /> {t('capabilities.capability1')}</li>
                <li><FaCloudDownloadAlt className="inline-block text-blue-500 mr-2" /> {t('capabilities.capability2')}</li>
                <li><FaListUl className="inline-block text-blue-500 mr-2" /> {t('capabilities.capability3')}</li>
                <li><FaFilm className="inline-block text-blue-500 mr-2" /> {t('capabilities.capability4')}</li>
                <li><FaMusic className="inline-block text-blue-500 mr-2" /> {t('capabilities.capability5')}</li>
                <li><FaHeadphones className="inline-block text-blue-500 mr-2" /> {t('capabilities.capability6')}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t('section2Description3')}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t('section3Title')}
            </h3>
            <p className="text-lg mb-4 ">
                {t('section3Description1')}
            </p>
            <ul className="list-disc list-inside mb-4 ">
                <li><FaCogs className="inline-block text-blue-500 mr-2" /> {t('offers.offer1')}</li>
                <li><FaClipboardCheck className="inline-block text-blue-500 mr-2" /> {t('offers.offer2')}</li>
                <li><FaTools className="inline-block text-blue-500 mr-2" /> {t('offers.offer3')}</li>
            </ul>
            <p className="text-lg mb-4 ">
                {t('section3Description2')}
            </p>
            <p className="text-lg mb-4 ">
                {t('section3Description3')}
            </p>
        </div>
    );
};

export default Multimedia;
