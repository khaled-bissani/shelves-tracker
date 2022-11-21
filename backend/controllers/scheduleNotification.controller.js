const cron = require('node-cron');
const User = require('../models/users.model');
const { Expo } = require('expo-server-sdk');
const sendPushNotification = require('../utilities/pushNotifications');

const notification = async(expoPushToken, message) => {
    if (Expo.isExpoPushToken(expoPushToken)) {
        await sendPushNotification(expoPushToken, message);
    }
}

const dateDiffInDays = (date1, date2) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
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
            const remainingDay = dateDiffInDays(today,new Date(singleProduct.expiry_date))
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