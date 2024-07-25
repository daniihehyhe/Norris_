import TypesSmartHome from '@/app/[locale]/home/TypesSmartHome';
import ContractStages from './home/ProjectStagesSmartHome';
import SmartHomeService from './home/SmartHomeService';
import MainNorris from './home/MainNorrisTittle';
import ComponentA from './home/ComponentA';
import ComponentB from './home/ComponentB';
import ComponentC from './home/ComponentC';
import ComponentD from './home/ComponentD';
import TypesSliderItemSmartHome from '@/app/[locale]/home/TypesSliderItemSmartHome';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import SecurityFeatures from './home/SecurityFeatures';
import CustomSlider from '@/components/CustomSlider';


const Page = () => {
  const t = useTranslations('mainMeta');
  return (
    <>
      <Head>
        <meta property="og:url" content="https://norris.kg" />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://norris.kg/favicon.ico" />
        <meta property="twitter:url" content="https://norris.kg" />
        <meta property="twitter:title" content={t('title')} />
        <meta property="twitter:description" content={t('description')} />
        <meta property="twitter:type" content="website" />
        <meta property="twitter:image" content="https://norris.kg/favicon.ico" />
        <link rel="alternate" hrefLang="en" href="https://norris.kg/en" />
        <link rel="alternate" hrefLang="ru" href="https://norris.kg/ru" />
        <link rel="alternate" hrefLang="kg" href="https://norris.kg/kg" />
        <link rel="alternate" hrefLang="kz" href="https://norris.kg/kz" />
      </Head>
      <MainNorris />
      <SecurityFeatures />
      <TypesSmartHome />
      <TypesSliderItemSmartHome />
      <ContractStages />
      <SmartHomeService />
      {/* <CustomSlider>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ComponentD />
      </CustomSlider> */}
    </>
  );
};

export default Page;
