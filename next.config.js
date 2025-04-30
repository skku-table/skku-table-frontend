// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // 개발 모드에서는 꺼둔다
});

const nextConfig = {
  // 기존 next 설정들
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
