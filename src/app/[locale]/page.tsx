import TypesSmartHome from '@/app/[locale]/home/TypesSmartHome';
import ContractStages from './home/ProjectStagesSmartHome';
import SmartHomeService from './home/SmartHomeService';
import MainNorris from './home/MainNorrisTittle';
import ComponentA from './home/ComponentA';
import ComponentB from './home/ComponentB';
import ComponentC from './home/ComponentC';
import ComponentD from './home/ComponentD';
import TypesSliderItemSmartHome from '@/app/[locale]/home/TypesSliderItemSmartHome';
import LinkPage from '@/components/LinkPage';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import SecurityFeatures from './home/SecurityFeatures';





  export default function Page() {
    const t = useTranslations('mainMeta');
return (
    <>
     <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta property="og:url" content="https://norris.kg" />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('description')} />
        <meta property="og:type" content="website" />
      </Head>
      <SecurityFeatures/>
        <MainNorris />
        <TypesSmartHome />
    <TypesSliderItemSmartHome/>
        <ContractStages />
        <SmartHomeService />
        <LinkPage/>
        {/* <Slider>
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
            <ComponentD/>
        </Slider> */}
    </>
);
}