const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('welcome to our about page');
  }
  res.end(
    `<h1>opps!</h1><p>we could not find the page you are looking for</p><a href="/">back to home</a>`
  );
});

server.listen(5000);
