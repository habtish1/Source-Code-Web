/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  basePath: "",
  async rewrites() {
    return [
      {
        source: "/font/:path*",
        destination: "/font/:path*",
      },
    ];
  },
};
