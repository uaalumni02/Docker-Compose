const  db  = require("../knex");

class Query {
  static async addProduct(productdata) {
    try {
      const newProduct = await db("products")
        .returning('*')
        .insert(productdata);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
  static async getProducts() {
    try {
      const getAllProducts = await db.select().from("products");
      return getAllProducts;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Query