const User = require('../models/users.model');

const addCategory = async(req,res) => {
    const {id, category, image} = req.body
    try {
        const new_category = await User.findOne({id});

        new_category.products.push({
            category:{
                category, image
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