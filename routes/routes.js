const express = require('express');
const router = express.Router();
const Product = require('../controllers/FuncController');

router.post('/product/create', Product.createProduct);
router.get('/product/list', Product.listProducts);
router.get('/product/search/:id', Product.searchProduct);
router.put('/product/update', Product.updateProduct);
router.delete('/product/delete/:id', Product.deleteProduct);


module.exports = router