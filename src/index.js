const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Node Js Assignment one")
})

app.listen(4090,()=>{
    console.log("Server listing on port 4090");
})