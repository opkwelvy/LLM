const express = require("express");
require('dotenv').config();
const {client} = require("./client/clientRedis")

const {chunksSearch} = require("./embadding/embadding")

const app = express()
app.listen(3333, async () =>{
    console.log("the port is:", 3333)
    console.log(chunksSearch)
})