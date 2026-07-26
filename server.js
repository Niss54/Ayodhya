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

  // 301 Redirect: root to home page (SEO-friendly server-side redirect)
  if (urlPath === '/') {
    response.writeHead(301, { 'Location': '/Build/ayodhya_darshan_mobile_home/home.html' });
    return response.end();
  }

  const requestedPath = path.resolve(root, `.${urlPath}`);
  if (!requestedPath.startsWith(root)) return response.writeHead(403).end('Forbidden');
  fs.readFile(requestedPath, (error, content) => {
    if (error) return response.writeHead(error.code === 'ENOENT' ? 404 : 500).end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
    response.writeHead(200, { 'Content-Type': contentTypes[path.extname(requestedPath)] || 'application/octet-stream' });
    response.end(content);
  });
}).listen(port, () => console.log(`Ayodhya Darshan is running at http://localhost:${port}`));
