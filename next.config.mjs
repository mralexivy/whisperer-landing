/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
};

export default nextConfig;
