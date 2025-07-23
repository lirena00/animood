import moods from "@/utils/mood";

export default function handler(req, res) {
  const baseUrl = "https://animood.lirena.in";
  const currentDate = new Date().toISOString();

  // Static pages with their priorities and update frequencies
  const staticPages = [
    {
      url: "",
      lastmod: currentDate,
      changefreq: "daily",
      priority: "1.0",
    },
    {
      url: "/history",
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      url: "/anilist",
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      url: "/faq",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.6",
    },
  ];

  // Generate mood-based URLs
  const moodPages = moods.map((mood) => {
    // Clean the mood string for URL encoding
    const cleanMood = mood.replace(/[^\w\s]/gi, "").trim();
    return {
      url: `/mood/${encodeURIComponent(cleanMood)}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9",
    };
  });

  // Combine all pages
  const allPages = [...staticPages, ...moodPages];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.status(200).send(sitemap);
}
