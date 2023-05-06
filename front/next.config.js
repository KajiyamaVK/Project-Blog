/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
