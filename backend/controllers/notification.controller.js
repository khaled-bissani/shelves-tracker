const User = require('../models/users.model');

const expoToken = async(req,res) => {
  const {id, expoPushToken} = req.body;

  const user = await User.findByIdAndUpdate(id, {expoPushToken})

  user.save()
  res.status(200).json({message: "Expo Token updated successfully"})
}

module.exports={expoToken};