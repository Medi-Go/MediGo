/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  compiler: {
    styledComponents: true,
  },
});