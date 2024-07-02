
import '../globals.css'
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "../../contexts/ThemeContext";
import TheHeader from "../../components/TheHeader";
import TheFooter from "../../components/TheFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    icons: {
      icon: ['/favicon.ico?v=4'],
      apple: ['/apple-touch-icon.png?v=4'],
      shortcut:['/apple-touch-icon.png']
    },
  };



type Props ={
    children: React.ReactNode;
    params:{
        locale: "ru"|"en"|"kg"|"kz"
    }
}

const RootLayout:React.FC<Props>=({
    children,
        params: {locale}
}) => {
    const messages =  useMessages();

    return (
        <html lang={locale}>
            
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider>
                        <TheHeader />
                        <div className='container mx-auto '>
                        {children}
                        </div>
                        <TheFooter />
      
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout