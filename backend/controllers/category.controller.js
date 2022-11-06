const User = require('../models/users.model');
const fs = require("fs");
const crypto = require("crypto");

const addCategory = async(req,res) => {
    const {id, category, image} = req.body

    const image_id = crypto.randomBytes(16).toString("hex");

    var base64Data = image.replace("data:image/png;base64,", "");
    const new_image = Buffer.from(base64Data, "base64");

    fs.writeFile(__dirname.replace('controllers', 'public/images/') + image_id + ".png", new_image, 
    (err) => {
        console.log(err);
    })

    try {
        const new_category = await User.findOne({id});

        new_category.products.push({
            category:{
                category, 
                image: image_id + '.png'
            }});

        await new_category.save();
        res.send(new_category);
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
}

const getCategory = async(req,res) => {
    const {id} = req.body;

    const categories = await User.findOne({id}).select('products.category');

    res.status(200).json(categories);
}

module.exports = {addCategory, getCategory};