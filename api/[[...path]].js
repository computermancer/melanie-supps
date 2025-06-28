const { createReadStream } = require('fs');
const { join } = require('path');

module.exports = (req, res) => {
  // Serve the index.html file for all routes
  const filePath = join(__dirname, '..', 'dist', 'index.html');
  const readStream = createReadStream(filePath);
  
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');
  
  // Pipe the file to the response
  readStream.pipe(res);
};
