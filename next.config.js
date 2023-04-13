/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl:
    "mongodb+srv://rohini19394:rr@cluster0.lyjdqir.mongodb.net/blog-app?retryWrites=true&w=majority",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
