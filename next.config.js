/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid',
  '@fullcalendar/react',
])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
})