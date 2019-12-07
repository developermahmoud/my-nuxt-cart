const ProductModel = require('../models/Product');

exports.index = (req, res, next) => {
    ProductModel.index().then(products=>{
        res.json({ data: products });
    })
}