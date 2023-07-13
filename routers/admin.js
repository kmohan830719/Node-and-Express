const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.js')

// /admin/add-product
router.get('/add-product', productController.getAddProducts);

// /admin/product
router.post('/product', productController.postAddProduct )

module.exports = router;