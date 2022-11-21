const User = require('../models/users.model');
const fs = require("fs");
const crypto = require("crypto");

const addCategory = async(req,res) => {
    const {id, category, image} = req.body

    const image_id = crypto.randomBytes(16).toString("hex");

    const base64Data = image.replace("data:image/png;base64,", "");
    const new_image = Buffer.from(base64Data, "base64");

    fs.writeFile(__dirname.replace('controllers', 'public/images/') + image_id + ".png", new_image, 
    (err) => {
        console.log(err);
    })

    try {
        const user = await User.findById(id);

        user.category.push({
            category, 
            image: image_id + '.png'
            });

        await user.save();
        res.send(user);
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
}

const getCategory = async(req,res) => {
    const {id} = req.body;

    const categories = await User.findById(id).select('category._id category.category category.image');

    res.status(200).json(categories);
}

module.exports = {addCategory, getCategory};