const cron = require('node-cron');
const User = require('../models/users.model');
const { Expo } = require('expo-server-sdk');
const sendPushNotification = require('../utilities/pushNotifications');

const notification = async(expoPushToken, message) => {
    if (Expo.isExpoPushToken(expoPushToken)) {
        await sendPushNotification(expoPushToken, message);
    }
}

const schedule = async(req, res) => {

}