/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/client' : '';
const nextConfig = {
    basePath: basePath, // The path to the client folder
}

module.exports = nextConfig
