const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

// Create the HTTP server
const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');

      // Extract the database file path from command-line arguments
      const dbFilePath = process.argv[2];

      // Check if the database file path is provided
      if (!dbFilePath) {
        res.end('Database file path not provided.\n');
        return;
      }

      // Ensure the database file exists
      if (!fs.existsSync(dbFilePath)) {
        res.end('Cannot load the database\n');
        return;
      }

      // Use the countStudents function to process the database file
      countStudents(dbFilePath)
        .then(() => {
          // Append 'Done!' message to indicate completion
          res.end('Done!\n');
        })
        .catch((error) => {
          res.end(`Error: ${error.message}\n`);
        });
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found\n');
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed\n');
  }
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable
module.exports = app;
