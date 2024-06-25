
"use client";

import TypesSmartHome from '@/components/TypesSmartHome';
import ContractStages from './home/ProjectStagesSmartHome';
import SmartHomeService from './home/SmartHomeService';
import LetterByLetter from "../../components/LetterByLetter";
import Slider from '../../components/Slider';
import MainNorris from './home/MainNorrisTittle';
import ComponentA from './home/ComponentA';
import ComponentB from './home/ComponentB';
import ComponentC from './home/ComponentC';
import ComponentD from './home/ComponentD';
import TypesSliderItemSmartHome from '@/components/TypesSliderItemSmartHome';
import LinkPage from '@/components/LinkPage';





export default function Page() {


return (
    <>
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
