const User = require('../models/users.model');

const dailyExpiry = async(req,res)=>{
    const {id} = req.body;

    try {
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
        
      // Sorting all the products by expiry date
      allProducts.sort((a,b) => new Date(a.expiry_date) - new Date(b.expiry_date))

      // Returning an object with dates as keys
      const groups = allProducts.reduce((groups, item) => {
        const date = item.expiry_date;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      }, {});
      
      const chartValue = Object.keys(groups).map((date) => {
        return {
          name: date,
          uv: groups[date].length
        };
      });


      let firstToExpire='-'  
      // Accessing the array of products to check the first product to expire
      for (let i = 0; i < allProducts.length; i++) {
        firstToExpire = allProducts[0].product_name + " " + allProducts[0].expiry_date
      }
      
      res.json({chartValue,count:allProducts.length, expire:firstToExpire})
        
      } catch (error) {
        console.log(error)
      }

}

module.exports={dailyExpiry};