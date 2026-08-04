const fs = require('fs');
const p = 'sitemap.xml';
let c = fs.readFileSync(p, 'utf8');
const newUrl = `
  <url>
    <loc>https://mahakaltourstravel.in/ramayana-circuit-tour/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
if (!c.includes('/ramayana-circuit-tour/')) {
    c = c.replace('</urlset>', newUrl + '\n</urlset>');
    fs.writeFileSync(p, c);
    console.log("Sitemap updated.");
} else {
    console.log("Already in sitemap.");
}
