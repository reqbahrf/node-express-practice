const { products } = require('./data');
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

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProduct = [...products];

  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }

  if (sortedProduct < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.json({ success: true, data: sortedProduct });
});
