const express = require("express");
const path = require("path");
const app = express();

require("./db/conn");

const contact = require("./models/cont");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname,'../public');

app.use(express.static(staticpath));

// app.use(express.static('public'));
// app.use('/public',express.static(__dirname,'public'));

app.get("/",(req,res)=>{
    res.sendFile('index.html');
})

app.post("/index", async(req,res)=>{
    try{
        
        const newContact = new contact({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            message : req.body.message

        })

        const ct = await newContact.save();
        res.status(201).sendFile(path.join(__dirname,'index.html'));
    }
    catch(e){
        res.status(400).send(e);
    }
})
app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
});

