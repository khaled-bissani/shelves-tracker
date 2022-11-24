const sendPushNotification = require('./pushNotifications');
const { Expo } = require('expo-server-sdk');

const notification = async(expoPushToken, message) => {
    if (Expo.isExpoPushToken(expoPushToken)) {
        await sendPushNotification(expoPushToken, message);
    }
}

module.exports={notification}