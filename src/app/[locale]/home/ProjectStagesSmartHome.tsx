import { useTranslations } from "next-intl";
import React from "react";

const ProjectStagesSmartHome: React.FC = () => {
    const t = useTranslations("ProjectStagesSmartHome")
    return (
        <section className=" flex flex-col items-center justify-evenly w-full pt-10 bg-gray-900">
            <div className="flex flex-col justify-center text-center items-center sm:w-3/5 mb-5 sm:mb-14">
                <h1 className=" font-bold mb-5 sm:mb-10 text-titleText  text-white">
                    {t("title")}
                </h1>
                <p className=" font-normal text-[16px] leading-[28px] text-center text-white opacity-72">
                    {t("description")}
                </p>
            </div>

            <main className="relative pb-10 hidden sm:flex flex-row-reverse items- justify-center h-full w-full text-white">
                <section className="w-2/5 h-fit pl-[15px]">
                    <div className=" h-fit mt-5 flex flex-col justify-between">
                        <span className="   font-semibold mb-3 text-subText leading-[20px] text-[#FA541C] relative before:content-['\00B7'] before:absolute before:text-[#FA541C] before:text-[70px] before:left-[-24px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8544;
                        </span>
                        <h5 className=" mb-5 font-bold text-subText leading-[36px] text-white">
                            {t("steps.step1.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step1.description")}
                        </p>
                    </div>

                    <div className="mt-[290px] h-fit flex flex-col justify-between">
                        <span className=" mb-3 text-subText font-semibold  leading-[20px] text-[#FFC81A] relative before:content-['\00B7'] before:absolute before:text-[#FFC81A] before:text-[70px] before:left-[-24px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8546;
                        </span>
                        <h5 className=" mb-5 font-bold text-subText leading-[36px] text-white">
                            {t("steps.step3.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step3.description")}
                        </p>
                    </div>
                </section>

                <section className=" w-2/5  pr-[15px] border-r-[1px] border-r-[#3b3a3a]">
                    <div className="mt-[290px]  h-fit flex flex-col justify-between items-end">
                        <span className=" mb-3 text-subText font-semibold  leading-[20px] text-[#22B8CF] relative before:content-['\00B7'] before:absolute before:text-[#22B8CF] before:text-[70px] before:right-[-21px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8545;
                        </span>
                        <h5 className=" mb-5 font-bold text-subText leading-[36px] text-white">
                            {t("steps.step2.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step2.description")}
                        </p>
                    </div>

                    <div className="mt-[290px]  h-fit flex flex-col justify-between items-end">
                        <span className=" mb-3 text-subText font-semibold  leading-[20px] text-[#0CD66E] relative before:content-['\00B7'] before:absolute before:text-[#0CD66E] before:text-[70px] before:right-[-21px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8547;
                        </span>
                        <h5 className=" mb-5 font-bold text-subText leading-[36px] text-white">
                            {t("steps.step4.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step4.description")}
                        </p>
                    </div>
                </section>
            </main>

            <section className=" sm:hidden h-fit w-full">
                <div className="flex flex-col gap-10 border-l-[1px] border-l-[#3b3a3a]  ml-5 p-4">
                    <div className="w-fit h-fit flex flex-col justify-between">
                        <span className=" font-semibold mb-3 text-subText  leading-[20px] text-[#FA541C] relative before:content-['\00B7'] before:absolute before:text-[#FA541C] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8544;
                        </span>
                        <h5 className=" font-bold text-subText leading-[36px] text-white">
                            {t("steps.step1.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step1.description")}
                        </p>
                    </div>

                    <div className="w-fit h-fit flex flex-col justify-between">
                        <span className=" font-semibold mb-3 text-subText  leading-[20px] text-[#22B8CF] relative before:content-['\00B7'] before:absolute before:text-[#22B8CF] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8545;
                        </span>
                        <h5 className=" font-bold text-subText leading-[36px] text-white">
                            {t("steps.step2.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step2.description")}
                        </p>
                    </div>

                    <div className="w-fit h-fit flex flex-col justify-between">
                        <span className=" font-semibold mb-3 text-subText  leading-[20px] text-[#FFC81A] relative before:content-['\00B7'] before:absolute before:text-[#FFC81A] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8546;
                        </span>
                        <h5 className=" font-bold text-subText leading-[36px] text-white">
                            {t("steps.step3.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step3.description")}
                        </p>
                    </div>

                    <div className="w-fit h-fit flex flex-col justify-between">
                        <span className=" font-semibold mb-3 text-subText  leading-[20px] text-[#0CD66E] relative before:content-['\00B7'] before:absolute before:text-[#0CD66E] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            &#8547;
                        </span>
                        <h5 className=" font-bold text-subText leading-[36px] text-white">
                            {t("steps.step4.title")}
                        </h5>
                        <p className=" font-normal text-contText leading-[26px] text-white opacity-72">
                            {t("steps.step4.description")}
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProjectStagesSmartHome;
