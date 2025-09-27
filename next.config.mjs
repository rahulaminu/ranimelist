/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            }
        ]
    },
    experimental: {
        // Enable if you're using app directory
        appDir: true,
    },
}



export default nextConfig;
