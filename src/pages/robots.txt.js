export default function RobotsTxt() {
  // This component will never be rendered
  return null;
}

export async function getServerSideProps({ res }) {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and API routes (except sitemap)
Disallow: /api/
Allow: /api/sitemap.xml

# Sitemap
Sitemap: https://animood.lirena.in/api/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.status(200).send(robotsTxt);

  return {
    props: {},
  };
}
