// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
