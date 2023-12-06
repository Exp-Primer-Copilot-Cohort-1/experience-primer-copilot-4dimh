// Create web server
// 1. create a web server
// 2. create a router
// 3. create a route
// 4. create a handler
// 5. send a response
// 6. start the server

// 1. create a web server
const http = require('http');
const port = 3000;
const server = http.createServer();
server.listen(port, () => console.log(`Server is running on port ${port}`));

// 2. create a router
const router = require('./router');

// 3. create a route
// 4. create a handler
server.on('request', (req, res) => {
  router(req, res);
});

// 5. send a response
// 6. start the server