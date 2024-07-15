import nextIntl from 'next-intl/plugin';
import withPlugins from 'next-compose-plugins';
import optimizedImages from 'next-optimized-images';
import TerserPlugin from 'terser-webpack-plugin';
import crypto from 'crypto';

// Конфигурация next-intl
const withNextIntl = nextIntl('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['norris.kg'], 
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
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

    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
          },
        }),
      ],
    };

    return config;
  },
};

export default withNextIntl(withPlugins([optimizedImages], nextConfig));
