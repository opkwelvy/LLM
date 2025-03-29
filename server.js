const express = require("express");
require('dotenv').config();

const {query} = require("./queryService/queryService")
query()

const app = express()
app.listen(3333, async () =>{
    console.log("the port is:", 3333)
})