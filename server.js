const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT) || 4173;
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon'
};

http.createServer((request, response) => {
  let urlPath = decodeURIComponent(request.url.split('?')[0]);

  // SEO URL mapping
  const routeMap = {
    '/ayodhya-taxi-service/': '/Build/car_rental_mobile/carrental.html',
    '/ayodhya-tour-packages/': '/Build/tour_packages_mobile/tour_packages_mobile.html',
    '/ayodhya-local-guides/': '/Build/tour_guides_mobile/tour_guides_mobile.html',
    '/hotels-in-ayodhya/': '/Build/hotels_rooms_mobile/hotels_rooms_mobile.html',
    '/ayodhya-sightseeing/': '/Build/destinations_mobile/destinations_mobile.html',
    '/contact/': '/Build/contact_mobile/contact-mobile.html',
    '/girls-hostel-ayodhya/': '/Build/girls_hostel_mobile/girls-hostel-mobile.html',
    '/reviews/': '/Build/reviews_mobile/reviews_mobile.html',
    '/blog/': '/Build/blog/blog.html',
    '/blog/ram-mandir-darshan-guide/': '/Build/blog/ram-mandir-darshan-guide.html',
    '/blog/sugam-darshan-pass-guide/': '/Build/blog/sugam-darshan-pass-guide.html',
    '/blog/best-time-to-visit-ayodhya/': '/Build/blog/best-time-to-visit-ayodhya.html',
    '/blog/ayodhya-varanasi-prayagraj-tour/': '/Build/blog/ayodhya-varanasi-prayagraj-tour.html',
    '/blog/deepotsav-ayodhya-2025/': '/Build/blog/deepotsav-ayodhya-2025.html',
    '/blog/ram-navami-ayodhya-2026/': '/Build/blog/ram-navami-ayodhya-2026.html',
    '/blog/ayodhya-taxi-rates/': '/Build/blog/ayodhya-taxi-rates.html',
    '/blog/places-to-visit-ayodhya/': '/Build/blog/places-to-visit-ayodhya.html',
    '/blog/ayodhya-mathura-vrindavan-tour/': '/Build/blog/ayodhya-mathura-vrindavan-tour.html',
    '/blog/girls-hostel-ayodhya-guide/': '/Build/blog/girls-hostel-ayodhya-guide.html',
    '/blog/how-to-reach-ayodhya/': '/Build/blog/how-to-reach-ayodhya.html',
    '/blog/ayodhya-hotel-booking-guide/': '/Build/blog/ayodhya-hotel-booking-guide.html',
    '/': '/Build/ayodhya_darshan_mobile_home/home.html'
  };

  // 301 Redirect old /Build/ paths to new clean URLs
  const invertedRouteMap = Object.entries(routeMap).reduce((acc, [clean, physical]) => {
    acc[physical] = clean;
    return acc;
  }, {});
  
  if (invertedRouteMap[urlPath] && urlPath !== '/') {
    response.writeHead(301, { 'Location': invertedRouteMap[urlPath] });
    return response.end();
  }

  // Rewrite clean URL to physical file path
  if (routeMap[urlPath]) {
    urlPath = routeMap[urlPath];
  }

  const requestedPath = path.resolve(root, `.${urlPath}`);
  if (!requestedPath.startsWith(root)) return response.writeHead(403).end('Forbidden');
  fs.readFile(requestedPath, (error, content) => {
    if (error) return response.writeHead(error.code === 'ENOENT' ? 404 : 500).end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
    response.writeHead(200, { 'Content-Type': contentTypes[path.extname(requestedPath)] || 'application/octet-stream' });
    response.end(content);
  });
}).listen(port, () => console.log(`Ayodhya Darshan is running at http://localhost:${port}`));
