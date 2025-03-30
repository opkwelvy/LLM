const express = require("express");
require('dotenv').config();
const {QueryController} = require("./controllers/queryController")

const app = express()

app.post('/query', QueryController.upload)
app.listen(3333, async () =>{
    console.log("the port is:", 3333)
})