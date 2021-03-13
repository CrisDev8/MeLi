const router = require('express').Router();

const { getProductsByQuery, getProductsById } = require("../controller/products.controller");

router.get('/items', getProductsByQuery);
router.get('/items/:id', getProductsById);

module.exports = router;