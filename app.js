const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/api/products', (req, res) => {
  const simplefiedProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(simplefiedProducts);
});

app.get('/api/products/:productID', (req, res) => {
  const productID = Number(req.params.productID);
  const selectedProduct = products.find((product) => product.id === productID);
  res.json(selectedProduct);
});

app.listen(5000, () => {
  console.log('App is running at port 5000');
});
