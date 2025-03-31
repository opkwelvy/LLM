const express = require("express");
require('dotenv').config();
const {QueryController} = require("./controllers/queryController")
const cors = require("cors");
const multer = require("multer")

const upload = multer();

const app = express()
app.use(cors());

app.post('/query', upload.single('file'), QueryController.upload)
app.listen(3333, async () =>{
    console.log("the port is:", 3333)
})