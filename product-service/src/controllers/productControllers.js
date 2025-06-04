// Temporary in-memory product store
let products = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Shoes', price: 50 }
];

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(204).send();
};

