"use cleint";

import '../globals.css'
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "../../contexts/ThemeContext";
import TheHeader from "../../components/TheHeader";
import TheFooter from "../../components/TheFooter";


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
                        {children}
                        <TheFooter />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}


export default RootLayout
