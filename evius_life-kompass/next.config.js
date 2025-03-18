/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  telemetry: false  // This disables telemetry
};

module.exports = nextConfig; 