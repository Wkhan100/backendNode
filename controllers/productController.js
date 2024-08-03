const asyncHandler = require('express-async-handler');

//const getProducts = asyncHandler(async(req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500);
//     }
// })

// const createProduct = asyncHandler(async(req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500);
//         throw new Error(error.message);
//     }
// })

const getProducts = async(req, res, next)=>{
    //  res.status(200).json();

    res.status(200).json({
        message: 'Products fetched.'
    });
}
const getProduct = (req, res, next)=>{
    const id = req.params.productId;
    if(id=== 'special'){
        res.status(200).json({
            message: 'You discovered the ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
}
const createProduct = (req, res, next)=>{
    const product = {
        productId: req.body.productId,
        productName: req.body.productName,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Created Product.',
        createdProduct: product
    })
}
const updateProduct = (req, res, next)=>{
    res.status(200).json({
        message: 'Updated product!'
    });
}
const deleteProduct = (req, res, next)=>{
    res.status(200).json({
        message: 'Deleted product!'
    });
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};