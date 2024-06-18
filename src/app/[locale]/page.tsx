
"use client";

import MainSlider from './home/MainSlider';
import ContractStages from './home/ContractStages';
import SmartHomeService from './home/SmartHomeService';
import LetterByLetter from "../../components/LetterByLetter";
import Slider from './home/Slider';




export default function Page() {


return (
    <>
        <MainSlider />
        <ContractStages />
        <SmartHomeService />
        <LetterByLetter>
            Конечно, давайте создадим универсальный компонент, который будет
            принимать children и анимировать их по буквам при прокрутке.
        </LetterByLetter>
        <Slider/>
    </>
);
}
