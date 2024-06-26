import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tailwindui.com'],
  },
  output: 'export',
};

export default withNextIntl(nextConfig);




// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output:"export"
// };

// export default withNextIntl(nextConfig);