/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Use polling instead of native watcher to avoid EMFILE on macOS
      config.watchOptions = {
        poll: 1000,
        ignored: ['**/node_modules', '**/.git'],
      }
    }
    return config
  },
}

module.exports = nextConfig
