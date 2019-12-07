const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log(1111);

var fruits = ["Banana", "Orange", "Apple", "Mango"];

const server = http.createServer((req, res) => {
	console.log(22222);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({aaa:45}));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
