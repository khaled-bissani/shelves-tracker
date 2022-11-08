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
    const {id,category} = req.body;

    const user = await User.findById(id);

    const filteredProducts = user.category.filter((singleCategory)=>{
        return singleCategory.category==category
    })

    res.status(200).json(filteredProducts);
}

const getSingleProduct = async(req,res) => {
    const {id, category, product} = req.body;

    const user = await User.findById(id);

    const filteredCategories = user.category.filter((singleCategory)=>{
        return singleCategory.category==category
    });

    const filteredProducts = filteredCategories[0].products.filter((singleProduct) => {
        return singleProduct.product_name == product;
    })

    res.status(200).json(filteredProducts);
}

const updateSingleProduct = async(req,res) => {
    const {id, category_id, product_id, product_name, quantity_shelf} = req.body;

    const user = await User.findOneAndUpdate(
        {
            "id" : id,
        },
        {
            $set: {
            "category.$[outer].products.$[inner].product_name": product_name,
            "category.$[outer].products.$[inner].quantity_shelf": quantity_shelf,
            }
        },
        {
            arrayFilters: [
            { "outer._id": category_id},
            {"inner._id": product_id}
        ]
        }
    );
        
    res.status(200).json(user)
}

module.exports={addProduct, getProduct, getSingleProduct, updateSingleProduct};