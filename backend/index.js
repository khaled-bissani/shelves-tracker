const express = require('express');

const app = express();
app.use(express.json());

app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err);
    console.log(`Running server on port ${process.env.PORT}`);
})