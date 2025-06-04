const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  deleteProduct,
} = require('../controllers/productControllers');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
