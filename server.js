const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

// Read the index.html file to serve it for all routes
const indexPath = path.join(__dirname, 'dist', 'index.html');
let htmlContent = '';

try {
  htmlContent = fs.readFileSync(indexPath, 'utf-8');
} catch (error) {
  console.error('Error reading index.html:', error);
  process.exit(1);
}

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  // Set cache control for static assets
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    // Don't cache HTML files
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store, max-age=0');
    }
  },
}));

// Handle SPA routing - serve index.html for all other routes
app.get('*', (req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return next();
  }
  
  // Check if the requested file exists
  const filePath = path.join(__dirname, 'dist', req.path);
  
  // If the file exists and it's not an API route, serve it
  if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
    return res.sendFile(filePath);
  }
  
  // Otherwise, serve the index.html for SPA routing
  res.set('Content-Type', 'text/html');
  res.send(htmlContent);
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
  console.log('\nMake sure you have built the app with `npm run build` before starting the server');
});
