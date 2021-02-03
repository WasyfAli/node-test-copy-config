const http = require('http');
//const port = process.env.PORT;
const { port } = require('./config');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node, UPDATED!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
