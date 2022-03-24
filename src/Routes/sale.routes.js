import { Router } from "express";
import { getSaleController, getSaleByIdController, addAndUpdateSaleController } from "../Controllers/sale.controllers.js";

const routes = Router();
const API_V1 = "api_v1";

//Logia para el manejo de las diferentes rutas de los reques, para manipular las ventas

routes.get(`/${API_V1}/sale`, getSaleController);
routes.get(`/${API_V1}/sale/:id`, getSaleByIdController);
routes.post(`/${API_V1}/sale/:id`, addAndUpdateSaleController);

export default routes;
