const User = require('../models/users.model');
const fs = require("fs");
const crypto = require("crypto");

const viewProfile = async(req, res) => {
    const {id} = req.body;

    const profile = await User.find({id}).select("full_name email phone_number location")

    res.status(200).json(profile);
}

const editProfile = async(req,res) => {
    const {id, full_name, email, phone_number, location} = req.body;

    User.findOneAndUpdate(id, {
        full_name, email, phone_number, location
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

const profilePicture = async(req,res) => {
    const {id, picture} = req.body;

    const image_id = crypto.randomBytes(16).toString("hex");

    const base64Data = picture.replace("data:image/png;base64,", "");
    const image = Buffer.from(base64Data, "base64");

    fs.writeFile(__dirname.replace('controllers', 'public/images/') + image_id + ".png", image, 
    (err) => {
        console.log(err);
    })
    
    User.findOneAndUpdate(id, {
        picture: image_id + '.png'
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

module.exports = {viewProfile, editProfile, profilePicture};