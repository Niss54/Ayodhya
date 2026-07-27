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

  // Handle root URL and directory indexes
  if (urlPath.endsWith('/')) {
    urlPath += 'index.html';
  }

  const requestedPath = path.resolve(root, `.${urlPath}`);
  
  if (!requestedPath.startsWith(root)) {
    return response.writeHead(403).end('Forbidden');
  }

  fs.stat(requestedPath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try to see if they requested a directory without a trailing slash
        fs.stat(requestedPath + '.html', (err2, stats2) => {
           if (!err2) {
               serveFile(requestedPath + '.html');
           } else {
               response.writeHead(404).end('Not found');
           }
        });
        return;
      }
      return response.writeHead(500).end('Server error');
    }
    
    if (stats.isDirectory()) {
      // Redirect to add trailing slash if it's a directory
      response.writeHead(301, { 'Location': urlPath + '/' });
      return response.end();
    }

    serveFile(requestedPath);
  });

  function serveFile(filePath) {
    fs.readFile(filePath, (error, content) => {
      if (error) return response.writeHead(500).end('Server error');
      response.writeHead(200, { 'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream' });
      response.end(content);
    });
  }

}).listen(port, () => console.log(`Ayodhya Darshan is running at http://localhost:${port}`));
