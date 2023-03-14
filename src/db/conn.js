const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/Contact",{
    useNewUrlParser:true,
}).then( () =>{
    console.log("Connection Successful");
}).catch((e) =>{
    console.log("Cannot Connect");
})

