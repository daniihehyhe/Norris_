import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default withNextIntl(nextConfig);


// import nextIntl from 'next-intl/plugin';

// const withNextIntl = nextIntl('./src/i18n.ts');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ['en', 'ru', 'ky', 'kz'],
//     defaultLocale: 'en',
//   },
// };

// export default withNextIntl(nextConfig);
