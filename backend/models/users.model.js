const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: 'full name is required'
    },
    username: {
        type: String,
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
    category: [{
        category:{
            type: String,
        },
        image:{
            type: String,
        },
        products: {
            product_name: {
                type: String,
            },
            quantity_shelf: {
                type: String,
            },
            expiry_date: {
                type: String,
            },
            image: {
                type: String,
            },
            barcode: {
                type: String,
            },
        },
    }],
})

const User = mongoose.model('User', userSchema);

module.exports = User;