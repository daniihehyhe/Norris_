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
      icons: {
         icon: ['/favicon.ico?v=4'],
         apple: ['/apple-touch-icon.png?v=4'],
         shortcut: ['/apple-touch-icon.png'],
      },
      openGraph: {
         title: t('title'),
         description: t('description'),
         type: 'website', // Вы можете изменить тип в зависимости от вашего контента
         url: 'https://www.norris.kg/', // URL вашей страницы
        image: '/public/android-chrome-512x512.png', 
         address: 'Бокомбаева 177',
         phone: '+996553228888',
      },
      twitter: {
        card: 'summary_large_image',
        title: t('title'),
        description: t('description'),
        image: '/public/android-chrome-512x512.png', 
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
