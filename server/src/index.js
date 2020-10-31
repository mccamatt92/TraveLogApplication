const express = require('express');


const app = express;

const port = process.env.port || 1337;


app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})