const User = require('../models/users.model');

const expoToken = async(req,res) => {
  const {id, expoPushToken} = req.body;

  await User.findByIdAndUpdate(id, {expoPushToken})
  .then(res.status(200).json({message: "Expo Token updated successfully"}))
  .catch((err)=>res.status(400).send(err))  
  
}

const saveNotification = async(req,res) => {
  const {id, single_notification} = req.body;

  try {
    const user = await User.findById(id);

    user.notifications.push({
      single_notification
      });

  await user.save();
  res.send(user.notifications);

  } catch (error) {
    console.log(error)
  }
}

module.exports={expoToken, saveNotification};