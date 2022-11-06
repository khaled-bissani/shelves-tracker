const User = require('../models/users.model');

const addProduct = async(req,res) => {
    const {id, product_name, quantity_shelf, expiry_date, image, barcode, category} = req.body
    try {
        const new_product = await User.findOne({id});

        new_product.products.push({
            product_name, quantity_shelf, expiry_date, image, barcode, category:{category}
        });

        await new_product.save();
        res.send(new_product);
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
}

const getProduct = async(req,res) => {
    const {id} = req.body;

    const products = await User.findOne({id}).select('products');

    res.status(200).json(products);
}

module.exports={addProduct, getProduct};