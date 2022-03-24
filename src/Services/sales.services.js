//Importamos modulo fs y path  para poder leer archivos locales e indicarles su respectiva ruta

import fs from "fs/promises";
import path, { join } from "path";

//Directorio en donde se encuentra el archivo que almacena la información que viene de los diferentes reques
const __dirname = path.resolve("./src/sale.json");

//Clase que me permite inicializarla con diferentes metodos para las diferentes peticiones

export default class saleService {

  //Metodo para obtener todos las ventas
  static async getAllSale() {
    try {
      const sale = await fs.readFile(__dirname, "utf-8");
      return JSON.parse(sale);
    } catch (error) {
      throw error;
    }
  }

  //Metodo para obtener una venta por id
  static async getSaleById(idSale) {
    try {
      const sale = await saleService.getAllSale();
      const saleProduct = sale.find((e) => e.id === parseInt(idSale));
      return saleProduct;
    } catch (error) {
      throw error;
    }
  }

  //Metodo para agregar una venta que valida si existe un producto y si existe aumenta el numero de productos vendidos
  static async addSale(idSale, countSale, saleObj) {
    const sales = await saleService.getAllSale();
    try {
      const searchSale = sales.find((e) => e.idProduct == idSale);
      if (typeof searchSale === "object") {
        const saleMain = sales.findIndex((e) => e.idProduct === idSale);
        const newDataSale = {
          ...sales[saleMain],
          ...sales
        };
        const updateSale = sales.map((e) => {
          let newDataSale = {};
          return e.idProduct === idSale
            ? (newDataSale = { ...e, count: (e.count += countSale) })
            : e;
        });
        await fs.writeFile(__dirname, JSON.stringify(updateSale));
      } else {
        try {
          sales.push(saleObj);
          await fs.writeFile(__dirname, JSON.stringify(sales));
        } catch (error) {
          throw error;
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
