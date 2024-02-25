/** @type {import('next').NextConfig} */

// module.exports = {
//   swcMinify: true,
//   images: {
//     domains: ['imgix.cosmicjs.com'],
//     formats: ['image/avif', 'image/webp'],
//   },
// };


module.exports = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com', // String for each allowed hostname
        pathname: '**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
};