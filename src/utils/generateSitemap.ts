
export const generateSitemap = () => {
  const baseUrl = 'https://6kalimas.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    ...Array.from({ length: 6 }, (_, i) => ({
      loc: `${baseUrl}/kalima/${i + 1}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
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
};
