import React from 'react';
import { MdHome, MdBuild, MdSecurity } from 'react-icons/md';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import layout_plan from '@public/images/layout_plan.webp';
import flat from '@public/images/flat.jpg';
import flat2 from '@public/images/flat2.webp';

const SmartHomeOverview: React.FC = () => {
  const t = useTranslations('SmartHomeOverview');

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h2 className="text-3xl font-bold mb-4 text-center text-orange-800">
        {t('title')}
      </h2>
      <p className="text-lg mb-4">
        {t('intro')}
      </p>
      <h3 className="text-2xl font-bold mb-4">
        <MdHome className="inline-block text-orange-800" /> {t('section1Title')}
      </h3>
      <p className="text-lg mb-4">
        {t('section1Content')}
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>{t('list1.item1')}</li>
        <li>{t('list1.item2')}</li>
        <li>{t('list1.item3')}</li>
        <li>{t('list1.item4')}</li>
        <li>{t('list1.item5')}</li>
        <li>{t('list1.item6')}</li>
      </ul>
      <Image src={layout_plan} alt={t('image1Alt')} className="rounded-lg shadow-md mb-8" />
      <p className="text-lg mb-4">
        {t('section2Content')}
      </p>
      <h3 className="text-2xl font-bold mb-4">
        <MdBuild className="inline-block text-orange-800" /> {t('section3Title')}
      </h3>
      <p className="text-lg mb-4">
        {t('section3Content')}
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>
          <strong>{t('list2.item1.title')}</strong> {t('list2.item1.content')}
        </li>
        <li>
          <strong>{t('list2.item2.title')}</strong> {t('list2.item2.content')}
        </li>
        <li>
          <strong>{t('list2.item3.title')}</strong> {t('list2.item3.content')}
        </li>
        <li>
          <strong>{t('list2.item4.title')}</strong> {t('list2.item4.content')}
        </li>
      </ul>
      <Image src={flat} alt={t('image2Alt')} className="rounded-lg shadow-md mb-8" />
      <p className="text-lg mb-4">
        {t('section4Content')}
      </p>
      <h3 className="text-2xl font-bold mb-4">
        <MdSecurity className="inline-block text-orange-800" /> {t('section5Title')}
      </h3>
      <p className="text-lg mb-4">
        {t('section5Content')}
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>{t('list3.item1')}</li>
        <li>{t('list3.item2')}</li>
        <li>{t('list3.item3')}</li>
      </ul>
      <Image src={flat2} alt={t('image3Alt')} className="rounded-lg shadow-md mb-8" />
      <p className="text-lg mb-4">
        {t('section6Content')}
      </p>
      <p className="text-lg mb-4">
        {t('contact')}
      </p>
    </div>
  );
};

export default SmartHomeOverview;
