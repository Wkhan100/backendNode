const express = require('express');

//product related model 
// const Product  = require('');

//product related controller to handle logic 
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}   = require('../controllers/productController');


const router = express.Router();

//define crud routes for products
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);



//exports router to access outside
module.exports = router;