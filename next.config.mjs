import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default withNextIntl(nextConfig);


const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], {
  images: {
    domains: ['https://norris.kg/'], // Добавьте свои домены
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
        framework: {
          chunks: 'all',
          name: 'framework',
          test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          test(module) {
            return module.size() > 160000 && /node_modules[/\\]/.test(module.nameForCondition());
          },
          name(module) {
            const hash = crypto.createHash('sha1');
            if (module.libIdent) {
              hash.update(module.libIdent({ context: 'dir' }));
            }
            return hash.digest('hex').slice(0, 8);
          },
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true,
        },
      };
    }

    return config;
  },
});

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
