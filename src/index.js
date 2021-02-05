const express = require('express');
const path = require('path');
const cors = require('cors');
const { render } = require('ejs');

const app = express();

app.use(cors());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'../','public')))


app.get('/',(req,res)=>{
    res.send('<h1>Node Js Assignment Three</h1>')
})

app.use((req,res,next)=>{
    const error =new Error("404 not found");
    error.status(404);
    next(error);
})
app.use((error,req,res,next)=>{
    if(error.status=404){
        res.status(404);
        return res.render('errors/404');
    }
    res.status(500);
    res.send('errors/500');
})


app.listen(4090,()=>{
    console.log("Server listing on port 4090");
})