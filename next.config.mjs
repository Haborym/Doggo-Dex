/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NGINX_ADDRESS],
  },
};

export default nextConfig;
