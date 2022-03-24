import fs from "fs/promises";
import path, { join } from "path";

const __dirname = path.resolve("./src/product.json");

//Clase que me permite inicializarla con diferentes metodos para las diferentes peticiones

export default class productServices {

  //Metodo para obtener todos los productos
  static async getAllProduct() {
    try {
      const product = await fs.readFile(__dirname, "utf-8");
      return JSON.parse(product);
    } catch (error) {
      throw error;
    }
  }
  //Metodo para obtener un producto por id
  static async getProductById(idProduct) {
    try {
      const product = await productServices.getAllProduct();
      const dataProduct = product.find((e) => e.id === idProduct);
      return dataProduct;
    } catch (error) {
      throw error;
    }
  }
  //Metodo para añadir un producto
  static async addProduct(objProduct) {
    try {
      const products = await productServices.getAllProduct();
      objProduct = {
        ...objProduct
      };
      products.push(objProduct);
      await fs.writeFile(__dirname, JSON.stringify(products));
    } catch (error) {
      throw error;
    }
  }
  //Metodo para actualizar un producto por id
  static async updateProduct(idProduct, product) {
    try {
      const products = await productServices.getAllProduct();
      const productData = products.findIndex((e) => e.id === idProduct);
      const newDataProduct = {
        ...products[productData],
        ...product
      };

      const updateProduct = products.map((e) => {
        return e.id === idProduct ? newDataProduct : e;
      });
      await fs.writeFile(__dirname, JSON.stringify(updateProduct));
    } catch (error) {}
  }
  //Metodo para eliminar un producto por Id
  static async deleteProduct(idProduct) {
    try {
      const products = await productServices.getAllProduct();
      const productData = products.filter((e) => e.id != idProduct);
      await fs.writeFile(__dirname, JSON.stringify(productData));
    } catch (error) {}
  }
}
