/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "estimda-cms.brackets-tech.com",
        port: "",
        pathname: "/img/asset/**"
      }
    ]
  }
};

export default nextConfig;
