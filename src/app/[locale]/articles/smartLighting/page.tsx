import React from "react";
import { useTranslations } from 'next-intl';

const SmartLighting: React.FC = () => {
    const t = useTranslations('SmartLighting');
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
                {t('title')}
            </h2>
            <p className="text-lg mb-4">
                {t('intro')}
            </p>
            <h3 className="text-2xl font-bold mb-4">
                {t('section1Title')}
            </h3>
            <p className="text-lg mb-4">
                {t('section1Description')}
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>{t('elements.element1')}</li>
                <li>{t('elements.element2')}</li>
                <li>{t('elements.element3')}</li>
                <li>{t('elements.element4')}</li>
                <li>{t('elements.element5')}</li>
                <li>{t('elements.element6')}</li>
                <li>{t('elements.element7')}</li>
                <li>{t('elements.element8')}</li>
            </ul>
            <p className="text-lg mb-4">
                {t('section2Description')}
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>{t('methods.method1')}</li>
                <li>{t('methods.method2')}</li>
                <li>{t('methods.method3')}</li>
            </ul>
            <p className="text-lg mb-4">
                {t('section3Description')}
            </p>
            <h3 className="text-2xl font-bold mb-4">
                {t('section4Title')}
            </h3>
            <p className="text-lg mb-4">
                {t('section4Description')}
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>{t('functions.function1')}</li>
                <li>{t('functions.function2')}</li>
                <li>{t('functions.function3')}</li>
            </ul>
            <p className="text-lg mb-4">
                {t('section5Description')}
            </p>
            <h3 className="text-2xl font-bold mb-4">
                {t('section6Title')}
            </h3>
            <p className="text-lg mb-4">
                {t('section6Description')}
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>{t('offers.offer1')}</li>
                <li>{t('offers.offer2')}</li>
                <li>{t('offers.offer3')}</li>
            </ul>
            <p className="text-lg mb-4">
                {t('section7Description')}
            </p>
            <p className="text-lg mb-4">
                {t('conclusion')}
            </p>
        </div>
    );
};

export default SmartLighting;
