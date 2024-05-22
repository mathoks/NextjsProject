/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: "imdb.com"
        }
    ]}
};

export default nextConfig;
