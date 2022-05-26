/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const config = {
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: ['apexlegendsstatus.com'],
  },
  swcMinify: false
};

module.exports = withPWA(config);