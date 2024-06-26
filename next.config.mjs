import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default withNextIntl(nextConfig);




// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output:"export"
// };

// export default withNextIntl(nextConfig);