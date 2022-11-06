const express = require('express');

require('dotenv').config();
require('./config/database.config');

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const authRouter = require('./routes/auth.routes');
app.use('/auth', authRouter);

const categoryRouter = require('./routes/category.routes');
app.use('/category', categoryRouter);

const productRouter = require('./routes/product.routes');
app.use('/product', productRouter);

app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err);
    console.log(`Running server on port ${process.env.PORT}`);
})