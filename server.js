const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing - serve index.html for all routes that don't match a file
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(filePath);
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
  console.log('\nMake sure you have built the app with \`npm run build\` before starting the server');
});
