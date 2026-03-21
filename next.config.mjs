/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Generate /privacy/ instead of /privacy for better static hosting
};

export default nextConfig;
