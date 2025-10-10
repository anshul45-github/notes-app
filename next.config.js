/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com', // This is the domain for Google profile pics
          port: '',
          pathname: '/a/**', // This allows any path starting with /a/
        },
      ],
    },
  };
module.exports = nextConfig
