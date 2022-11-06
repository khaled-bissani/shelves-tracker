const User = require('../models/users.model');

const viewProfile = async(req, res) => {
    const {id} = req.body;

    const profile = await User.find({id}).select("full_name email phone_number location")

    res.status(200).json(profile);
}

const editProfile = async(req,res) => {
    const {id, full_name, email, phone_number, location} = req.body;
    try{
        const profile = User.findOneAndUpdate(id, {
            full_name, email, phone_number, location
        })
        
        res.send(profile);
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
}

module.exports = {viewProfile, editProfile};