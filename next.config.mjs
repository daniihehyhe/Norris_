import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default withNextIntl(nextConfig);