/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'linkedin.com','media.licdn.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
