const express = require("express");
const cors = require("cors");
const { query } = require("../queryService/queryService")
const createError = require("http-errors")

const app = express();
app.use(cors());

class QueryController {
  static async upload(req, res) {
    // if (!req.file) {
    //   return res.status(400).send("No file uploaded.");
    // }
    try{
        console.log('entrou')
        const response = await query();
        res.status(200).send(response)
    }catch(e){
        return createError(400, "error on upload file")
    }
  }
}
module.exports = {QueryController}