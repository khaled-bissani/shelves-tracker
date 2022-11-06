const User = require('../models/users.model');

const viewProfile = async(req, res) => {
    const {id} = req.body;

    const profile = await User.find({id}).select("full_name", "email", "phone_number", "location")

    res.status(200).json(profile);
}

module.exports = {viewProfile};