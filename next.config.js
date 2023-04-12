/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl:
    "mongodb+srv://rohini19394:rr@cluster0.lyjdqir.mongodb.net/blog-app?retryWrites=true&w=majority",
  },
}

module.exports = nextConfig
