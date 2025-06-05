const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

let inventory = {}; // simple in-memory store

app.get('/health', (req, res) => {
  res.send('Inventory service is healthy');
});

app.post('/inventory', (req, res) => {
  const { productId, quantity } = req.body;
  inventory[productId] = (inventory[productId] || 0) + quantity;
  res.status(201).send(`Inventory updated: ${productId} = ${inventory[productId]}`);
});

app.get('/inventory/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({ productId, quantity: inventory[productId] || 0 });
});

app.listen(PORT, () => {
  console.log(`Inventory service running on port ${PORT}`);
});

