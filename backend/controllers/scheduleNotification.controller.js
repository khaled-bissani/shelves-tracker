const cron = require('node-cron');
const User = require('../models/users.model');
const { Expo } = require('expo-server-sdk');
const sendPushNotification = require('../utilities/pushNotifications');

const notification = async(expoPushToken, message) => {
    if (Expo.isExpoPushToken(expoPushToken)) {
        await sendPushNotification(expoPushToken, message);
    }
}

// Calling the schedule function everyday at midnight
cron.schedule('0 0 0 * * *', function () {
    console.log('running at midnight');
    schedule()
});

const schedule = async(req, res) => {
    const allUser = await User.find()

    // Getting the id and the expo token from the database
    for (let i = 0; i < allUser.length; i++) {
        const id = allUser[i]._id.toString();
        const expoPushToken = allUser[i].expoPushToken

        const user = await User.findById(id)
    
        // Filtering the categories to access the array of products
        const filteredCategories = user.category.filter((singleCategory)=>{
            return singleCategory.products
        })
    
        // Getting an array of all the products available
        const allProducts = [];
        for(let i=0; i<filteredCategories.length; i++){
            allProducts.push(...filteredCategories[i].products) 
        }

        // Getting the current day
        const today = new Date();
        
        // Accessing the array of products to check if the expiry date of each product is within a week
        for (let i = 0; i < allProducts.length; i++) {
            const singleProduct = allProducts[i];
            const remainingDay = new Date(singleProduct.expiry_date).getDate()-today.getDate()
            if(remainingDay < 7){
                const message = `${singleProduct.product_name} is expiring in less than a week. ${remainingDay} days left`;
                notification(expoPushToken, message)
            }
            if(remainingDay == 0){
                const message = `${singleProduct.product_name} is expired. Please make sure to remove it.`;
                notification(expoPushToken, message)
            }
        }
    }
}