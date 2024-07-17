'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import phone from '@/../public/images/phone_smart_home.png'
import LetterByLetter from '@/components/LetterByLetter';
import { useTranslations } from 'next-intl';
import ContactModal from '@/components/ContactModal';

function MainNorrisTittle() {
     const t = useTranslations("MainNorrisTittle");
     const [showModal, setShowModal] = useState(false);
     const handleClose = () => {
        setShowModal(false);
    };
    
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setShowModal(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
	return (
        <>
            <main className="pt-20 flex justify-between">
                <motion.div
                    className="flex flex-col justify-around px-2 items-center md:w-3/6 md:items-start sm:mt-10"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}>
                    <h1 className="text-titleText text-center md:text-start md:mb-0 font-bold">
                        {t("title")}
                    </h1>
                    <div className="text-conText mb-5 md:mb-0 font-semibold">
                        <LetterByLetter>{t("description")}</LetterByLetter>
                    </div>
                    <motion.button
                    onClick={() => setShowModal(true)}
                        className="btn px-6 text-lg py-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        {t("button")}
                    </motion.button>
                    { showModal &&
            <ContactModal showModal={showModal} onClose={handleClose} />
          }
                </motion.div>
                <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}>
                    <Image loading='lazy'
                        src={phone}
                        height={900}
                        width={300}
                        className='w-auto'
                        alt="swart home systems"
                    />
                </motion.div>
            </main>
            <main className="mt-10 mb-20">
                <motion.div
                    className="bg-norris_dark p-8 md:p-14 md:w-3/5  rounded-tr-3xl rounded-br-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    <ul className="custom-list space-y-4 text-white font-semibold text-contText">
                        <li className="relative pl-4 md:pl-12 mb-8 leading-2xl custom-list-item">
                            {t("benefit1")}
                        </li>
                        <li className="relative pl-4 md:pl-12  mb-8 leading-2xl custom-list-item">
                            {t("benefit2")}
                        </li>
                        <li className="relative pl-4 md:pl-12  mb-8 leading-2xl custom-list-item">
                            {t("benefit3")}
                        </li>
                    </ul>
                </motion.div>
            </main>
            <main className="relative bg-norris_dark p-textClamp">
                <motion.div
                    className="absolute text-contText flex justify-center items-center py-2 text-white h-24 md:h-40 w-56  md:w-2/6 text-center  -top-[90px] md:-top-28 right-2 md:right-1/4 bg-moss_green rounded-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    {t("request")}
                </motion.div>
                <motion.p
                    className="text-white text-subText md:leading-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    {t("discount")}
                </motion.p>
            </main>
        </>
    );
}

export default MainNorrisTittle;
