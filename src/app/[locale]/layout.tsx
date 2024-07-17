import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from '../../contexts/ThemeContext';
import TheHeader from '../../components/TheHeader';
import TheFooter from '../../components/TheFooter';
import LinkPage from '@/components/LinkPage';
import Head from 'next/head';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
   const t = await getTranslations('mainMeta');

   return {
      title: t('title'),
      description: t('description'),
      icons: {
         icon: ['/favicon.ico?v=4'],
         apple: ['/apple-touch-icon.png?v=4'],
         shortcut: ['/apple-touch-icon.png'],
      },
      openGraph: {
         title: t('title'),
         description: `${t('description')} Адрес: Бокомбаева 177. Телефон: +996553228888.`,
         type: 'website',
         url: 'https://www.norris.kg/',
         image: '/logo_norris.png', // Убедитесь, что это изображение доступно
         address: 'Бокомбаева 177',
         phone: '+996553228888',
      },
      twitter: {
         card: 'summary_large_image',
         title: t('title'),
         description: `${t('description')} Address: Bokombaeva 177. Phone: +996553228888.`,
         image: '/logo_norris.png' // Убедитесь, что это изображение доступно
      }
   };
}

type Props = {
   children: React.ReactNode;
   params: {
      locale: 'ru' | 'en' | 'kg' | 'kz';
   };
   metadata: {
      title: string;
      description: string;
      icons: {
         icon: string[];
         apple: string[];
         shortcut: string[];
      };
      openGraph: {
         title: string;
         description: string;
         type: string;
         url: string;
         image: string;
         address: string;
         phone: string;
      };
      twitter: {
         card: string;
         title: string;
         description: string;
         image: string;
      };
   };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale }, metadata }) => {
   const messages = useMessages();

   return (
      <html lang={locale}>
         <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" href={metadata.icons.icon[0]} />
            <link rel="apple-touch-icon" href={metadata.icons.apple[0]} />
            <link rel="shortcut icon" href={metadata.icons.shortcut[0]} />
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:image" content={metadata.openGraph.image} />
            <meta property="og:street-address" content={metadata.openGraph.address} />
            <meta property="og:phone_number" content={metadata.openGraph.phone} />
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:title" content={metadata.twitter.title} />
            <meta name="twitter:description" content={metadata.twitter.description} />
            <meta name="twitter:image" content={metadata.twitter.image} />
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
