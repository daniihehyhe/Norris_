import React from "react";

const ContractStages: React.FC = () => {
    return (
        <div className=" flex flex-col items-center justify-evenly w-full pt-10 bg-gray-900">
            <div className="flex flex-col items-center justify-end w-[480px] mb-14">
                <h1 className="font-montserrat font-bold text-[48px] leading-[64px] text-white">
                    How It Works
                </h1>
                <p className="font-montserrat font-normal text-[16px] leading-[28px] text-center text-white opacity-72">
                    Nunc nonummy metus. Donec elit libero, sodales nec, volutpat
                    a, suscipit non, turpis.
                </p>
            </div>

            <div className="relative hidden sm:flex flex-row-reverse items-center justify-center h-full w-full text-white">
                <section className=" h-[750px] pl-[15px]">
                    <div className="w-[360px] h-[160px] flex flex-col justify-between">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#FA541C] relative before:content-['\00B7'] before:absolute before:text-[#FA541C] before:text-[70px] before:left-[-24px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 1
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Planning
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>

                    <div className="mt-[200px] w-[380px] h-[160px] flex flex-col justify-between">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#FFC81A] relative before:content-['\00B7'] before:absolute before:text-[#FFC81A] before:text-[70px] before:left-[-24px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 3
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Research
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>
                </section>

                <section className="h-[750px] pr-[15px] border-r-[1px] border-r-[#3b3a3a]">
                    <div className="mt-[180px] w-[380px] h-[160px] flex flex-col justify-between items-end">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#22B8CF] relative before:content-['\00B7'] before:absolute before:text-[#22B8CF] before:text-[70px] before:right-[-21px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 2
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Optimizing
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>

                    <div className="mt-[200px] w-[380px] h-[160px] flex flex-col justify-between items-end">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#0CD66E] relative before:content-['\00B7'] before:absolute before:text-[#0CD66E] before:text-[70px] before:right-[-21px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 4
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Results
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>
                </section>
            </div>

            <div className=" sm:hidden w-full">
                <div className="flex flex-col gap-[50px] border-l-[1px] border-l-[#3b3a3a] h-[750px] ml-[20px] p-[16px]">
                    <div className="w-[330px] h-[160px] flex flex-col justify-between">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#FA541C] relative before:content-['\00B7'] before:absolute before:text-[#FA541C] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 1
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Planning
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>

                    <div className="w-[350px] h-[160px] flex flex-col justify-between">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#22B8CF] relative before:content-['\00B7'] before:absolute before:text-[#22B8CF] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 2
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Research
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>

                    <div className="w-[330px] h-[160px] flex flex-col justify-between">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#FFC81A] relative before:content-['\00B7'] before:absolute before:text-[#FFC81A] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 3
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Optimizing
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>

                    <div className="w-[330px] h-[160px] flex flex-col justify-between">
                        <span className="font-montserrat font-semibold text-[12px] leading-[20px] text-[#0CD66E] relative before:content-['\00B7'] before:absolute before:text-[#0CD66E] before:text-[70px] before:left-[-26px] before:top-[-7px] before:bg-[#161c24] before:h-[30px] before:w-[14px] before:leading-[27px]">
                            step 4
                        </span>
                        <h5 className="font-montserrat font-bold text-[24px] leading-[36px] text-white">
                            Results
                        </h5>
                        <p className="font-montserrat font-normal text-[14px] leading-[26px] text-white opacity-72">
                            Curabitur ullamcorper ultricies nisi. Praesent
                            nonummy mi in odio. Donec mollis hendrerit risus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractStages;
