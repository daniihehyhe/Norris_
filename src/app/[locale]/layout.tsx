import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from '../../contexts/ThemeContext';
import TheHeader from '../../components/TheHeader';
import TheFooter from '../../components/TheFooter';
import { getTranslations } from 'next-intl/server';
import LinkPage from '@/components/LinkPage';
import Head from 'next/head';

export async function generateMetadata() {
   const t = await getTranslations('mainMeta');

   return {
      title: t('title'),
      description: t('description'),
      keywords: t('keywords'),
      icons: {
         icon: ['/logo_norris.png?v=4'],
         apple: ['/apple-touch-icon.png?v=4'],
         shortcut: ['/apple-touch-icon.png'],
      },
      openGraph: {
         title: t('title'),
         description: t('description'),
         type: 'website',
         url: 'https://norris.kg/', // URL вашей страницы
         image: '/logo_norris.png',
         address: 'Боконбаева 177',
         phone: '+996553228888',
      },
      twitter: {
         card: 'summary_large_image',
         title: t('title'),
         url: 'https://norris.kg/', 
         description: t('description'),
         image: '/logo_norris.png',
      }
   };
}

type Props = {
   children: React.ReactNode;
   params: {
      locale: 'ru' | 'en' | 'kg' | 'kz';
   };
};

const RootLayout: React.FC<Props> = ({
   children,
   params: { locale },
}) => {
   const messages = useMessages();

   return (
      <html lang={locale}>
         <Head>
            <link rel="alternate" hrefLang="en" href="https://norris.kg/en" />
            <link rel="alternate" hrefLang="ru" href="https://norris.kg/ru" />
            <link rel="alternate" hrefLang="kg" href="https://norris.kg/kg" />
            <link rel="alternate" hrefLang="kz" href="https://norris.kg/kz" />
         </Head>
         <body className="font-Montserrat">
            <NextIntlClientProvider messages={messages}>
               <ThemeProvider>
                  <TheHeader />
                  <div className="container mx-auto">{children}</div>
                  <LinkPage />
                  <TheFooter />
               </ThemeProvider>
            </NextIntlClientProvider>
         </body>
      </html>
   );
};

export default RootLayout;
