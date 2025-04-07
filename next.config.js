import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public'
});

const nextConfig = {
  /* config options here */
};

export default pwaConfig(nextConfig);
