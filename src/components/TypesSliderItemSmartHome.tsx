"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import konditsioner from "@/../public/images/konditsioner.jpg";
import night_light from "@/../public/images/night_light.jpeg";
import auto_light from "@/../public/images/auto_light.jpg";
import vacuum_cleaner from "@/../public/images/vacuum_cleaner.jpg";
import Slider from "@/components/Slider";

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
        <Slider>
            {sliderItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-10 md:flex-row bg-norris_dark p-8 md:p-16 w-fit  items-center justify-center rounded-3xl">
                    <p className="w-72 text-white text-center sm:text-start text-contText mr-5">
                        {t(item.id)}
                    </p>
                    <Image
                        src={item.image}
                        height={250}
                        width={222}
                        alt={item.alt}
                    />
                </div>
            ))}
        </Slider>
    );
}

export default TypesSliderItemSmartHome;
