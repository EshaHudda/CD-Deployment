// Import the built-in 'http' module for creating a web server
const http = require('http');

// Define the hostname and port the server will listen on
const hostname = '127.0.0.1'; // This is the loopback address (localhost)
const port = 3002;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code 200 (OK) and content type 'text/plain'
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});
function add(a, b) {
    return a + b;
}
if (require.main === module) {server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

}
// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  // This callback function is executed once the server starts listening
  console.log(`Server running at http://${hostname}:${port}/`);
});