const express = require('express');
const ejs = require('ejs');
const app = express();

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000.');
});