/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      process: require.resolve('process/browser'),
    };
    return config;
  },
  reactStrictMode: false, // will be handled in following releases, when enabled there are problems in development
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_ELROND_API}/:path*`,
        destination: `${process.env.ELROND_CUSTOM_API}/:path*`,
      },
    ];
  },
  eslint: {
    dirs: ['components', 'config', 'hooks', 'pages', 'store', 'types', 'utils'],
  },
  output: 'standalone'
};

module.exports = nextConfig;
