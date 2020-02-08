const mongoose = require('mongoose');
const URI = require('config').get("URI");

mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if (err) console.log('Help!!!');
    else console.log('DB Connected');
})