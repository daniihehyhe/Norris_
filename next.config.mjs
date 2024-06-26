import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  // Вставьте ваши опции плагина здесь, если они есть
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // другие параметры конфигурации
};

export default withNextIntl(nextConfig);


// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output:"export"
// };

// export default withNextIntl(nextConfig);