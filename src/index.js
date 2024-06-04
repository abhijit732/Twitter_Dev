const express= require('express');
const connect = require('./config/database');
const app=express();

const Tweet=require('./models/tweet');
app.listen(3000, async ()=>{
    console.log('Server started at Port 3000');
    await connect();
    console.log('Mongo DB Connected');
    
    const tweets= await Tweet.find({
        content:["First Tweet", "Third tweet", "12345"]
    });

    console.log(tweets);

    
}); 