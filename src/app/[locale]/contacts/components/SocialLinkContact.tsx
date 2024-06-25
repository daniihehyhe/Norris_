import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok, FaTelegram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const socialLinks = [
  {
    href: 'https://wa.me/996553228888?text=Привет, хочу Умный Дом!',
    icon: FaWhatsapp,
    color: '#25D366',
    label: 'WhatsApp'
  },
  {
    href: 'https://instagram.com/norris.kg',
    icon: FaInstagram,
    color: '#E1306C',
    label: 'Instagram'
  },
  {
    href: 'mailto:sale@norris.kg',
    icon: FaEnvelope,
    color: '#000000',
    label: 'Email'
  },
  {
    href: 'https://tiktok.com/norris.kg',
    icon: FaTiktok,
    color: '#000000',
    label: 'TikTok'
  },
  {
    href: 'https://t.me/norriskg',
    icon: FaTelegram,
    color: '#0088cc',
    label: 'Telegram'
  }
];

const SocialLink: React.FC = () => {
  const t = useTranslations('contactUs')
  return (
    <div className="relative flex flex-col items-center mt-8">
      <div className="relative p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">{t("socialTitle")} </h2>
        <p className="text-center mb-8 ">{t("socialTitle")} </p>
        <ul className="flex flex-wrap gap-6 justify-center">
          {socialLinks.map((link, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Link target="_blank" rel="noopener noreferrer" href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gray-600 text-white transition-all duration-300 hover:border-2 hover:border-gray-300"
                >
                  <link.icon size={50} color={link.color} />
                  <motion.span
                    whileHover={{
                      textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-medium "
                  >
                    {link.label}
                  </motion.span>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLink;