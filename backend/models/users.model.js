const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: 'full name is required'
    },
    username: {
        type: String,
        required: 'username is required'
    },
    email: {
        type: String,
        required: 'email is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    phone_number: {
        type: String,
    },
    location: {
        type: String,
    },
    picture: {
        type: String,
    },
    user_type: {
        type: String,            
        enum: ['Admin', 'Supplier', 'Supermarket'],
    },
    products: [{
        product_name: {
            type: String,
            required: 'product name is required'
        },
        quantity_shelf: {
            type: String,
            required: 'quantity on shelf is required'
        },
        expiry_date: {
            type: String,
            required: 'expiry date is required'
        },
        image: {
            type: String,
            required: 'image is required'
        },
        barcode: {
            type: String,
            required: 'barcode is required'
        },
        category: {
            category:{
                type: String,
                required: 'category name is required'
            },
            image:{
                type: String,
                required: 'image is required'
            },
        },
    }],
})

const User = mongoose.model('User', userSchema);

module.exports = User;