const Response = require("../helpers/response/response");

const Query = require("../database/queries/query");

class ProductData {
  static async addProduct(req, res) {
    const product = { ...req.body };
    try {
      const productInfo = await Query.addProduct(product);
      return Response.responseOkCreated(res, productInfo);
    } catch (err) {
      console.log(err);
      return Response.responseServerError(res);
    }
  }
  static async getAllProducts(req, res) {
    try {
      const getAllProducts = await Query.getProducts(req);
      return Response.responseOk(res, getAllProducts);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

module.exports = ProductData;
