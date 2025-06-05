const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
  res.status(200).send('Product Service is healthy!');
});

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});

