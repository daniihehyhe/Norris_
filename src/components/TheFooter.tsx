'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import whiteLogo from '@public/images/white_logo.png';
import Image from 'next/image';
import SocialLink from './SocialLink';



function TheFooter() {
    const t = useTranslations('footer');

    interface MenuItem {
        label: string;
        link: string;
    }

    const menuItemsWindowHeader: MenuItem[] = [
        { label: t("home"), link: "/" },
        { label: t('services'), link: '/services' },
        { label: t('aboutUs'), link: '/about' },
        { label: t('portfolio'), link: '/portfolio' },
        { label: t('articles'), link: '/articles' },
        { label: t('contacts'), link: '/contacts' },
    ];

    return (
        <>
            <div className='container mx-auto' id="mapContainer">
                <iframe
                title={t("address")}
                    id="googleMap"
                    className="w-full h-64"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d731.0574036548701!2d74.5864628!3d42.8679975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb76a5ccec697%3A0x1033d2839123ff1d!2sNorris%20Service!5e0!3m2!1sru!2skg!4v1715775977645!5m2!1sru!2skg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                <Image
                                    src={ whiteLogo.src}
                                    width={150}
                                    height={70}
                                    className='w-auto'
                                    alt="logo_norris.kg"
                                />
                            </h3>
                            <p className="text-gray-400">{t('description')}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
                            <nav className="text-gray-400">
                                {menuItemsWindowHeader.map((item, index) => (
                                    <div key={index} className="hover:text-gray-600">
                                        <Link  rel="noopener noreferrer" href={item.link}>{item.label}</Link>
                                    </div>
                                ))}
                            </nav>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">{t('contactUs')}</h3>
                            <ul className="text-gray-400">
                                <li className="mb-2">{t('emailLabel')}: sale@norris.kg</li>
                                <li className="mb-2">{t('phoneLabel')}: +(996)553-228-888</li>
                                <li className="mb-2">{t('address')}</li>
                            </ul>
                           <SocialLink/>
                        </div>
                    </div>
                    <div className="text-center text-gray-400 mt-8">
                        &copy; {new Date().getFullYear()} {t('company')}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default TheFooter;
