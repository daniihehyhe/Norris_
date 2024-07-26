import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from '../../contexts/ThemeContext';
import TheHeader from '../../components/TheHeader';
import TheFooter from '../../components/TheFooter';
import { getTranslations } from 'next-intl/server';
import LinkPage from '@/components/LinkPage';



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
         images: [ {
            url: 'https://norris.kg/favicon.ico', // Must be an absolute URL
            width: 800,
            height: 600,
          },],
         address: 'Боконбаева 177',
         phone: '+996553228888',
         locale: 'en_US',
      },
      twitter: {
         card: 'summary_large_image',
         title: t('title'),
         url: 'https://norris.kg/', 
         description: t('description'),
         images: ['https://norris.kg/favicon.ico'],
      },
      robots: {
         index: false,
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
