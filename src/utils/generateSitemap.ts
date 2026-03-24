
export const generateSitemap = () => {
  const baseUrl = 'https://6kalimas.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    // Homepage - highest priority
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    // Individual Kalima pages - very high priority
    ...Array.from({ length: 6 }, (_, i) => ({
      loc: `${baseUrl}/kalima/${i + 1}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.95'
    })),
    // Blog listing page
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.85'
    },
    // Blog posts - longtail keyword targets
    {
      loc: `${baseUrl}/blog/how-to-memorize-6-kalimas-easily`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      loc: `${baseUrl}/blog/complete-list-islamic-duas-daily-life`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.80'
    },
    {
      loc: `${baseUrl}/blog/benefits-importance-6-kalimas-islam`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      loc: `${baseUrl}/blog/99-names-allah-asma-ul-husna`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.80'
    },
    {
      loc: `${baseUrl}/blog/how-to-perform-wudu-ablution-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.75'
    },
    {
      loc: `${baseUrl}/blog/islamic-duas-protection-evil-eye-black-magic`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.75'
    },
    {
      loc: `${baseUrl}/blog/best-times-recite-kalimas-duas-islam`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.80'
    },
    {
      loc: `${baseUrl}/blog/learn-arabic-alphabet-quran-reading-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.75'
    },
    // New longtail keyword blog posts
    {
      loc: `${baseUrl}/blog/6-kalimas-for-kids-parents-teaching-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      loc: `${baseUrl}/blog/kalima-tayyibah-complete-guide-meaning-benefits`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.88'
    },
    {
      loc: `${baseUrl}/blog/kalima-istighfar-when-to-recite-benefits`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      loc: `${baseUrl}/blog/difference-between-kalima-tayyibah-and-shahadat`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.83'
    },
    {
      loc: `${baseUrl}/blog/6-kalimas-new-muslims-converts-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.83'
    },
    {
      loc: `${baseUrl}/blog/how-many-kalimas-in-islam-complete-explanation`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      loc: `${baseUrl}/blog/kalima-radde-kufr-meaning-importance-when-to-recite`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.83'
    },
    {
      loc: `${baseUrl}/blog/6-kalimas-word-by-word-arabic-english-translation`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      loc: `${baseUrl}/blog/6-kalimas-roman-english-transliteration-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.80'
    },
    // Static pages
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.65'
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.55'
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.30'
    },
    {
      loc: `${baseUrl}/disclaimer`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.30'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
  
  console.log('Generated Sitemap:');
  console.log(sitemap);
  
  return sitemap;
};

// Function to generate robots.txt content
export const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

Sitemap: https://6kalimas.com/sitemap.xml`;

  console.log('Generated robots.txt:');
  console.log(robotsTxt);
  
  return robotsTxt;
};
