/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "static.semafor.com",
      "img.semafor.com",
      "proxy.extractcss.dev",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.semafor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.semafor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "proxy.extractcss.dev",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
