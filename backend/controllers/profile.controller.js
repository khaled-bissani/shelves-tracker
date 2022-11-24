const User = require('../models/users.model');
const fs = require("fs");
const crypto = require("crypto");
const bcrypt = require('bcrypt');

const viewProfile = async(req, res) => {
    const {id} = req.body;

    const profile = await User.findById(id).select("full_name email phone_number location")

    res.status(200).json(profile);
}

const editProfile = async(req,res) => {
    const {id, full_name, email, phone_number, location} = req.body;

    await User.findByIdAndUpdate(id, {
        full_name, email, phone_number, location
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

const profilePicture = async(req,res) => {
    const {id, picture} = req.body;

    const image_id = crypto.randomBytes(16).toString("hex");

    const base64Data = picture.replace("data:image/png;base64,", "");
    const new_image = Buffer.from(base64Data, "base64");

    fs.writeFile(__dirname.replace('controllers', 'public/images/') + image_id + ".png", new_image, 
    (err) => {
        console.log(err);
    })
    
    await User.findByIdAndUpdate(id, {
        picture: image_id + '.png'
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

const viewProfilePicture = async(req,res) => {
    const {id} = req.body;

    const profile = await User.findById(id).select("picture")

    res.status(200).json(profile);
}

const changePassword = async(req,res) => {
    const {id, old_password, new_password} = req.body;

    const user = await User.findById(id).select("+password");

    const matchPassword = await bcrypt.compare(old_password, user.password);
    if(matchPassword) {
        await user.update(id,{password: await bcrypt.hash(new_password,6)})
        
        await user.save();
        return res.status(200).json({message: "Password changed"});
    }
    return res.status(404).json({message: "Wrong password"});
}

module.exports = {viewProfile, editProfile, profilePicture, viewProfilePicture, changePassword};