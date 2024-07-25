"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import konditsioner from "@/../public/images/konditsioner.png";
import night_light from "@/../public/images/slider/light_control.png";
import auto_light from "@/../public/images/light_home_control.png";
import vacuum_cleaner from "@/../public/images/vacuum_cleaner_smart.png";
import CustomSlider from "@/components/CustomSlider";

interface SliderItem {
    id: "item1" | "item2" | "item3" | "item4";
    image: any;
    alt: string;
}

export const sliderItems: SliderItem[] = [
    { id: "item1", image: konditsioner, alt: "konditsioner" },
    { id: "item2", image: night_light, alt: "night light" },
    { id: "item3", image: auto_light, alt: "auto light" },
    { id: "item4", image: vacuum_cleaner, alt: "vacuum robot cleaner" }
];
function TypesSliderItemSmartHome() {
    const t = useTranslations("TypesSliderItemSmartHome");

    return (
        <CustomSlider>
            {sliderItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-2 md:flex-row bg-norris_dark p-4 md:p-10 w-fit  items-center justify-center rounded-3xl">
                    <p className="w-60 md:w-72  text-white text-center sm:text-start text-contText mr-5">
                        {t(item.id)}
                    </p>
                    <div className="relative w-64 h-64">

                    <Image loading='lazy'
                    className="w-auto"
                    src={item.image}
                    fill
                    // height={250}
                    // width={222}
                    alt={item.alt}
                    />
                    </div>
                </div>
            ))}
        </CustomSlider>
    );
}

export default TypesSliderItemSmartHome;
