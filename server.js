const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 8000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.apk': 'application/vnd.android.package-archive'
};

const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;

  // Default to index.html for root path
  if (pathname === '/') {
    pathname = '/index.html';
  }

  const filePath = path.join(__dirname, pathname);

  // Security: prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`🚀 Create-A-Date development server running!`);
  console.log(`📱 Open your browser and go to: http://localhost:${port}`);
  console.log(`📂 Serving files from: ${__dirname}`);
  console.log(`🖼️  Gallery images loaded: 9 screenshots ready`);
  console.log(`📱 APK download available at: http://localhost:${port}/app-release.apk`);
  console.log(`\n💡 Press Ctrl+C to stop the server`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`❌ Port ${port} is already in use. Try a different port or stop the existing server.`);
  } else {
    console.log('❌ Server error:', err.message);
  }
});
