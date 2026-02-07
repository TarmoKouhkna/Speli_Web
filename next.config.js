/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Use polling instead of native watcher to avoid EMFILE on macOS
      config.watchOptions = {
        poll: 1000,
        ignored: ['**/node_modules', '**/.git'],
      }
      // Disable file-based cache to avoid ENOENT / 1.pack.gz errors
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
