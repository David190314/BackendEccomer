import { v4 as uuidv4 } from "uuid";
uuidv4();
import saleService from "../Services/sales.services.js";

export const getSaleController = async (req, res) => {
  try {
    const sale = await saleService.getAllSale();
    res.status(200).json(sale);
  } catch (error) {
    throw error;
  }
};

export const getSaleByIdController = async (req, res) => {
  let { id } = req.params;

  try {
    const sale = await saleService.getSaleById(id);
    (await !sale)
      ? res.status(200).json({ message: "Sale id not Found" })
      : res.status(200).json(sale);
  } catch (error) {
    throw error;
  }
};

export const addAndUpdateSaleController = async (req, res) => {
  let { id } = req.params;
  const sales = await saleService.getAllSale();
  const newSale = {
    id: sales.length + 1,
    idProduct: req.body.idProduct,
    count: req.body.count
  };
  try {
    const sale = sales.find((e) => e.idProduct === id);
    (await !sale)
      ? res.status(200).json({ message: "new SaleId Created" })
      : res.status(200).json({ message: "Sale Created or Updated" }),
      saleService.addSale(id, req.body.count, newSale);
  } catch (error) {
    throw error;
  }
};
