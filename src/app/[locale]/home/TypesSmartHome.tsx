"use client";
import React from "react";
import { useTranslations } from "next-intl";

const TypesSmartHome: React.FC = () => {
    const t = useTranslations("TypesSmartHome");

    return (
        <section className="my-10 px-textClamp">
            <div>
                <h3 className="text-titleText mb-10 font-medium">
                    {t("title")}
                </h3>
                <p className="text-contText mb-5">{t("intro1")}</p>
                <p className="text-contText">{t("intro2")}</p>
            </div>
            <div className="text-contText items-center text-white flex flex-col gap-3 sm:flex-row sm:gap-0 justify-around my-10">
                <button className="bg-norris_dark px-6 py-2 rounded-md">
                    {t("wireless")}
                </button>
                <button className="bg-norris_dark px-6 py-2 rounded-md">
                    {t("wired")}
                </button>
                <button className="bg-norris_dark px-6 py-2 rounded-md">
                    {t("hybrid")}
                </button>
            </div>
            <div className="text-contText">
                <p>{t("details1")}</p>
                <p className="mt-5">{t("details2")}</p>

                <ul className="bg-moss_green flex flex-col gap-1 text-white p-5 sm:p-10 rounded-2xl my-10 list-disc">
                    <li>{t("benefit1")}</li>
                    <li>{t("benefit2")}</li>
                    <li>{t("benefit3")}</li>
                    <li>{t("benefit4")}</li>
                </ul>
                <p>{t("details3")}</p>
            </div>
            <h2 className="text-titleText font-medium my-10">
                {t("management_title")}
            </h2>
            <div className="text-contText">
                <p>{t("details4")}</p>
                <p className="py-5">{t("details5")}</p>
                <p>{t("details6")}</p>
            </div>
        </section>
    );
};

export default TypesSmartHome;
