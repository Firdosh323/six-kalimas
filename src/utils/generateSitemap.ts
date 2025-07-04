
export const generateSitemap = () => {
  const baseUrl = 'https://6kalimas.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    // Main pages
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      loc: `${baseUrl}/disclaimer`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    // Individual Kalima pages
    ...Array.from({ length: 6 }, (_, i) => ({
      loc: `${baseUrl}/kalima/${i + 1}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Create and download sitemap
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Also log the sitemap for copying
  console.log('Generated Sitemap:');
  console.log(sitemap);
  
  return sitemap;
};

// Function to generate robots.txt content
export const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://6kalimas.com/sitemap.xml

# Specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /`;

  console.log('Generated robots.txt:');
  console.log(robotsTxt);
  
  return robotsTxt;
};
