/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');

const withPWA = require('next-pwa');

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
]);

module.exports = withPlugins([
  [withPWA, withTM],
  {
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
  },
]);
