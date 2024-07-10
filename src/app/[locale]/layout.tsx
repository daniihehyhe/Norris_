import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from '../../contexts/ThemeContext';
import TheHeader from '../../components/TheHeader';
import TheFooter from '../../components/TheFooter';
import { getTranslations } from 'next-intl/server';
import LinkPage from '@/components/LinkPage';

export async function generateMetadata() {
  const t = await getTranslations('mainMeta' );

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: ['/favicon.ico?v=4'],
      apple: ['/apple-touch-icon.png?v=4'],
      shortcut: ['/apple-touch-icon.png']
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',  // Вы можете изменить тип в зависимости от вашего контента
      url: 'https://www.norris.kg/',  // URL вашей страницы
      image: '/favicon.ico?v=4'  // URL изображения для превью
    }
  };
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: 'ru' | 'en' | 'kg' | 'kz';
  };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className='font-Montserrat'>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <TheHeader />
            <div className="container mx-auto">{children}</div>
            <LinkPage/>
            <TheFooter />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;


// import '../globals.css';
// import { NextIntlClientProvider, useMessages } from 'next-intl';
// import { ThemeProvider } from '../../contexts/ThemeContext';
// import TheHeader from '../../components/TheHeader';
// import TheFooter from '../../components/TheFooter';
// import {getTranslations} from 'next-intl/server';
 
// export async function generateMetadata({params: {locale}}) {
//   const t = await getTranslations({locale, namespace: 'Metadata'});
 
//   return {
//     title: t('title')
//   };
// }


// type Props = {
//    children: React.ReactNode;
//    params: {
//       locale: 'ru' | 'en' | 'kg' | 'kz';
//    };
// };

// const RootLayout: React.FC<Props> = ({
//    children,
//    params: { locale },
// }) => {
//    const messages = useMessages();

//    return (
//       <html lang={locale}>
//          <body>
//             <NextIntlClientProvider messages={messages}>
//                <ThemeProvider>
//                   <TheHeader />
//                   <div className="container mx-auto ">{children}</div>
//                   <TheFooter />
//                </ThemeProvider>
//             </NextIntlClientProvider>
//          </body>
//       </html>
//    );
// };

// export default RootLayout;



// import { Metadata } from 'next';

// export const metadata: Metadata = {
//    icons: {
//       icon: ['/favicon.ico?v=4'],
//       apple: ['/apple-touch-icon.png?v=4'],
//         shortcut:['/apple-touch-icon.png']
//    },
// };
