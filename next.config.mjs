/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: "imdb.com"
        },
        {
            protocol: 'https',
            hostname: "loremflickr.com"
        },
        {
            protocol: 'https',
            hostname: "picsum.photos"
        }
    ]},
    trailingSlash: false
};

export default nextConfig;
