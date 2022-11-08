const User = require('../models/users.model');

const getClient = async(req,res) => {
    const {user_type} = req.body;

    const user = await User.find({user_type}).select("_id full_name email picture");

    res.status(200).json(user);
}

module.exports={getClient};