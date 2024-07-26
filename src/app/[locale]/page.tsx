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
import SecurityFeatures from './home/SecurityFeatures';
import CustomSlider from '@/components/CustomSlider';


const Page = () => {
  const t = useTranslations('mainMeta');
  return (
    <>
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
