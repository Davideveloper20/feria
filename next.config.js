/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  
  module.exports = withMDX({
    // Otras configuraciones de Next.js
  })
  
