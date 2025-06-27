
// Utility to generate sitemap data for SEO
export const generateSitemap = () => {
  const baseUrl = 'https://6kalimas.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/kalima-tayyibah`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/kalima-shahadat`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/kalima-tamjeed`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/kalima-tawheed`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/kalima-istighfar`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/kalima-radde-kufr`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    }
  ];

  return pages;
};

export const generateSitemapXML = () => {
  const pages = generateSitemap();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return xml;
};
