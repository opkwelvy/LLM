const { query } = require("../queryService/queryService");
const createError = require("http-errors");

class QueryController {
  static async upload(req, res) {
    
    try {
      const response = await query(req.body.query, req.file);
      console.log(response);
      res.status(200).json({
        success: true,
        message: response,
      });
    } catch (e) {
      return createError(400, "error on upload file");
    }
  }
}
module.exports = { QueryController };
