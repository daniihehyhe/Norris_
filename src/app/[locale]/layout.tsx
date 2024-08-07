import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from '../../contexts/ThemeContext';
import TheHeader from '../../components/TheHeader';
import TheFooter from '../../components/TheFooter';
import { getTranslations } from 'next-intl/server';
import LinkPage from '@/components/LinkPage';
import Head from 'next/head';
import GoogleTagManager from '@/components/GoogleTagManager';

export async function generateMetadata() {
   const t = await getTranslations('mainMeta');

   return {
      title: t('title'),
      description: t('description'),
      keywords: t('keywords'),
      icons: {
         icon: ['/android-chrome-192x192?v=4'],
         apple: ['/apple-touch-icon.png?v=4'],
         shortcut: ['/apple-touch-icon.png'],
      },
      openGraph: {
         title: t('title'),
         type: 'website',
         description: t('description'),
         images: [
            {
              url: 'https://norris.kg/opengraph-image.png', // Must be an absolute URL
              width: 1200,
              height: 630,
            },
         ],
         url: 'https://norris.kg/', 
         locale: 'kg',
      },
      twitter: {
         site_name:"norris.kg",
         url: 'https://norris.kg/', 
         card: 'summary_large_image',
         title: t('title'),
         description: t('description'),
         images: [
            {
              url: 'https://norris.kg/opengraph-image.png', // Must be an absolute URL
              width: 1200,
              height: 630,
            },
         ],
      },
      robots: {
         index: true,
         follow: true,
         nocache: true,
         googleBot: {
           index: true,
           follow: false,
           noimageindex: true,
           'max-video-preview': -1,
           'max-image-preview': 'large',
           'max-snippet': -1,
         },
       },
       alternates: {
        canonical: 'https://www.norris.kg/',
        languages: {
          'en-US': 'https://www.norris.kg/en',
          'ka': 'https://www.norris.kg/kz',
          'kg': 'https://www.norris.kg/kg',
          'ru': 'https://www.norris.kg/ru',
        },
      },
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
         <head>
<GoogleTagManager/>
         </head>
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
