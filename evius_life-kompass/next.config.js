/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  telemetry: false  // This disables telemetry
};

module.exports = nextConfig; 