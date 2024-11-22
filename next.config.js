/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.dcm$/,
        type: 'asset/resource'
      });
      return config;
    },
    // Add this to allow loading DICOM files from external sources
    images: {
      domains: ['raw.githubusercontent.com']
    }
  }
  
  module.exports = nextConfig