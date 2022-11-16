const express = require('express');

require('dotenv').config();
require('./config/database.config');

const app = express();
app.use(express.json({limit:'50mb'}));

const cors = require("cors");
app.use(cors());

const authRouter = require('./routes/auth.routes');
app.use('/auth', authRouter);

const categoryRouter = require('./routes/category.routes');
app.use('/category', categoryRouter);

const productRouter = require('./routes/product.routes');
app.use('/product', productRouter);

const profileRouter = require('./routes/profile.routes');
app.use('/profile', profileRouter);

const clientRouter = require('./routes/client.routes');
app.use('/client', clientRouter);

const path = require('path')
app.use('/static',express.static(path.join(__dirname,'./public')));

app.listen(process.env.PORT, process.env.IP_ADDRESS ,  (err)=>{
    if(err) console.log(err);
    console.log(`Running server on port ${process.env.PORT} and on IP address ${process.env.IP_ADDRESS}`);
})