const { readFileSync } = require('fs');
const { join } = require('path');
const { parse } = require('url');

module.exports = (req, res) => {
  try {
    // Parse the URL to get the pathname
    const { pathname } = parse(req.url);
    
    // Serve static files directly
    if (pathname.startsWith('/assets/') || 
        pathname.startsWith('/static/') || 
        /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/.test(pathname)) {
      
      const filePath = join(__dirname, '..', 'dist', pathname);
      const content = readFileSync(filePath);
      
      // Set appropriate content type based on file extension
      const mimeTypes = {
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
        '.svg': 'image/svg+xml',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
        '.eot': 'application/vnd.ms-fontobject'
      };
      
      const ext = pathname.match(/\.(\w+)$/)?.[1] || '';
      const contentType = mimeTypes[`.${ext}`] || 'application/octet-stream';
      
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.end(content);
    }
    
    // For all other routes, serve the index.html file
    const html = readFileSync(join(__dirname, '..', 'dist', 'index.html'), 'utf-8');
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'no-cache');
    res.end(html);
    
  } catch (error) {
    console.error('Error handling request:', error);
    
    // If index.html is not found, return 404
    if (error.code === 'ENOENT') {
      res.statusCode = 404;
      return res.end('Not Found');
    }
    
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};
