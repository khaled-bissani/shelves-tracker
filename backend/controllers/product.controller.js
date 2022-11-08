const User = require('../models/users.model');
const fs = require("fs");
const crypto = require("crypto");

const addProduct = async(req,res) => {
    const {id, product_name, quantity_shelf, expiry_date, image, barcode, category} = req.body;

    const image_id = crypto.randomBytes(16).toString("hex");

    const base64Data = image.replace("data:image/png;base64,", "");
    const new_image = Buffer.from(base64Data, "base64");

    fs.writeFile(__dirname.replace('controllers', 'public/images/') + image_id + ".png", new_image, 
    (err) => {
        console.log(err);
    })

    try {
        const user = await User.findOne({id});

        const product = {product_name, quantity_shelf, expiry_date, barcode,
        image: image_id + '.png'}

        const filteredCategories = user.category.filter((singleCategory)=>{
            return singleCategory.category==category
        })

        filteredCategories[0].products.push(product)

        await user.save();
        res.send(filteredCategories);
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
}

const getProduct = async(req,res) => {
    const {id} = req.body;

    const products = await User.find({id}).select('category.products');

    res.status(200).json(products);
}

module.exports={addProduct, getProduct};