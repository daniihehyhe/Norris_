
'use client'

import React from 'react';
import blinds from '@/../public/images/slider/blinds.jpeg'
import radio from '@/../public/images/slider/radio.jpeg'
import house from '@/../public/images/slider/house.jpg'
import gate from '@/../public/images/slider/gate.jpg'
import gate1 from '@/../public/images/slider/l_3.jpg'
import CustomSlider from '@/components/CustomSlider';
import Image from 'next/image';
import { useTranslations } from 'next-intl';




interface Stages {
  id: string,
  title: string,
  description: "item1" | "item2" | "item3";
}


const stagesItems: Stages[] = [
  {id:'1', title: '1', description: 'item1' },
  {id:'2', title: '2', description: 'item2' },
  { id:'3', title: '3', description: 'item3' },
];


interface SliderItem {
  id: "item1" | "item2" | "item3" | "item4" | "item5"
  image: any;
  alt: string;
}


const slider: SliderItem[] = [
  { id: "item1", image: gate, alt: "gate" },
  { id: "item2", image: gate1, alt: "gate1" },
  { id: "item3", image: house, alt: "house" },
  { id: "item4", image: blinds, alt: "blinds" },
  { id: "item5", image: radio, alt: "radio" }
]



const SecurityFeatures: React.FC = () => {
  const t = useTranslations("SecurityFeatures")

  const tStages = useTranslations("SecurityFeatures.stages")
  const tSlider = useTranslations("SecurityFeatures.slider")
  return (
    <main className="work-stages pt-20 pb-5 bg-norris_dark">
      <section className=' text-white px-3 py-20 '>
      <h2 className="text-titleText font-bold mb-6">{t("title")}</h2>
      <p className='text-subText my-10'>
      {t("subtitle")}
      </p>
    <div className='flex flex-col lg:flex-row'>
        {stagesItems.map((stage, index) => (
          <div key={stage.id} className="flex flex-col lg:flex-row justify-center items-center ">
            <h3 className="text-9xl lg:text-[300px]  font-semibold text-moss_green leading-none">{stage.id}</h3>
            <p className='text-contText p-10 lg:p-5 '>{tStages(stage.description)}</p>
          </div>
        ))}
        </div>
      </section>
      <section>
        <p className='text-subText px-5 text-white'>
        {t("info")}
        </p>
        <CustomSlider>
            {slider.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-2 border border-gray-700 md:flex-row bg-norris_dark p-4 md:p-3 w-fit  items-center justify-center rounded-3xl">
                    <p className="w-60 md:w-72  text-white text-center sm:text-start text-contText mr-5">
                        {tSlider(item.id)}
                    </p>

                    <Image
                    className='w-56 h-40 object-cover'
                        src={item.image}
                        width={222}
                        height={250}
                        alt={item.alt}
                        />
                        </div>
            ))}
        </CustomSlider>
        <p className='text-subText p-5 text-white'>
        {t("advantages")}
        </p>
      </section>
    </main>
  );
};

export default SecurityFeatures;
