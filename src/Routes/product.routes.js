import { Router } from "express";
import {
  getProductController,
  getProductByIdController,
  addProductController,
  updateProductController,
  deleteProductController
} from "../Controllers/product.controllers.js";

const routes = Router();
const API_V1 = "api_v1";

//Logia para el manejo de las diferentes rutas de los reques, para manipular los productos

routes.get(`/${API_V1}/products`, getProductController);
routes.get(`/${API_V1}/product/:id`, getProductByIdController);
routes.post(`/${API_V1}/product`, addProductController);
routes.put(`/${API_V1}/product/update/:id`, updateProductController);
routes.delete(`/${API_V1}/product/delete/:id`, deleteProductController);

export default routes;
