const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'page/about.html'));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
