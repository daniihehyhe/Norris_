import Script from 'next/script';
import React from 'react';

const GoogleTagManager: React.FC = () => {
  return (
    <>
      {/* Google Tag Manager for GTM-557XBV6F */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-557XBV6F');
        `}
      </Script>
      {/* End Google Tag Manager */}

      {/* Google tag (gtag.js) for G-JKBWEP1NMS */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JKBWEP1NMS"
        strategy="afterInteractive"
      />
      <Script id="gtag-init-G-JKBWEP1NMS" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JKBWEP1NMS');
        `}
      </Script>

      {/* Google tag (gtag.js) for G-YJ8Z2LPVYG */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YJ8Z2LPVYG"
        strategy="afterInteractive"
      />
      <Script id="gtag-init-G-YJ8Z2LPVYG" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YJ8Z2LPVYG');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-557XBV6F"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
};

export default GoogleTagManager;
