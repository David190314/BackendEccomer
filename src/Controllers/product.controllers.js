import { v4 as uuidv4 } from "uuid";
uuidv4();
import productServices from "../Services/product.services.js";

//Metodos que maneja las cabeceras body que son enviadas desde cada request, para las funcionalidades de los endpoint de productos

export const getProductController = async (req, res) => {
  try {
    const products = await productServices.getAllProduct();
    res.status(200).json(products);
  } catch (error) {
    throw error;
  }
};

export const getProductByIdController = async (req, res) => {
  let { id } = req.params;
  try {
    const product = await productServices.getProductById(id);
    !product
      ? res.status(200).json({ message: "Product id not Found" })
      : res.status(200).json(product);
  } catch (error) {
    throw error;
  }
};

export const addProductController = async (req, res) => {
  try {
    let newProduct = {
      id: uuidv4(),
      type: req.body.type,
      description: req.body.description,
      brand: req.body.brand,
      value: req.body.value,
      available: req.body.available,
      colour: req.body.colour,
      image: req.body.url
    };
    const array = await productServices.addProduct(newProduct);
    res.status(201).json({ message: "Product Created Successfully" });
    return array;
  } catch (error) {
    throw error;
  }
};

export const updateProductController = async (req, res) => {
  let { id } = req.params;
  try {
    const product = req.body;
    const getproduct = await productServices.getProductById(id);
    (await !getproduct)
      ? res.json({ message: "Product id not Found" })
      : res.status(201).json({ message: "Product update Sucessfully" }),
      productServices.updateProduct(id, product);
  } catch (error) {
    throw error;
  }
};

export const deleteProductController = async (req, res) => {
  let { id } = req.params;
  try {
    const getproduct = await productServices.getProductById(id);
    (await !getproduct)
      ? res.json({ message: "Product id not Found" })
      : res.status(201).json({ message: "Product Delete Succesfully" }),
      productServices.deleteProduct(id);
  } catch (error) {}
};
