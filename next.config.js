/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["s4.anilist.co"],
  },

  async headers() {
    return [
      {
        source: "/api/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=86400, stale-while-revalidate",
          },
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
