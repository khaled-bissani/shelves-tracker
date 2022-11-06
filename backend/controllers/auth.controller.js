const User = require('../models/users.model');
const bcrypt = require('bcrypt');

const signup = async(req,res) => {
    const {full_name, username, email, phone_number, password, user_type} = req.body;
    try {
        const user = new User();
        user.full_name= full_name;
        user.username= username;
        user.email=email;
        user.phone_number=phone_number;
        user.password= await bcrypt.hash(password,6);
        user.user_type=user_type;

        await user.save();
        res.send(user);
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
}

const login = async(req,res) => {
    const {username, password} =req.body;

    const user = await User.findOne({username}).select("+password");

    if(!user) return res.status(404).json({message: "Wrong email or password"})

    const matchPassword = bcrypt.compare(password, user.password);
    if(!matchPassword) return res.status(404).json({message: "Wrong email or password"});
}

module.exports = {signup}