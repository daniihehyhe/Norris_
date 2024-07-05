'use client'
import {  useEffect } from 'react';
import React, { useState } from 'react'
import document_sign from '@/../public/images/document_sign1.jpg'
import flat2 from '@/../public/images/flat2.webp'
import Image from 'next/image'
import LetterByLetter from './LetterByLetter'
import ContactModal from './ContactModal'
import { useTranslations } from 'next-intl'

function LinkPage() {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("LinkPage")
 
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
    <section className='relative flex h-screen items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${flat2.src})` }}>
      <div className='flex flex-col md:flex-row bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden max-w-4xl'>
        <main className='p-8 md:w-1/2 flex flex-col justify-center'>
          <h4 className='text-2xl font-bold mb-4 text-gray-800'>
            <LetterByLetter>
{t("title")}
            </LetterByLetter>
            </h4>
          <p className='text-gray-600 mb-4'>
            {t("subtitle")}
          </p>
          <button onClick={() => setShowModal(true)} className='btn py-2'>
            Связаться с нами
          </button>
          { showModal &&
            <ContactModal showModal={showModal} onClose={handleClose} />
          }
        </main>
        <main className='relative md:w-1/2 h-64 md:h-auto'>
          <Image src={document_sign} alt='document sign' className='object-cover w-auto' priority />
        </main>
      </div>
    </section>
  )
}

export default LinkPage
