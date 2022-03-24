import express from "express";
import cors from 'cors'
import productRoutes from "./Routes/product.routes.js";
import saleRoutes from "./Routes/sale.routes.js"

//Instanaciando express
const app = express();

//Metodo para poder interpretar información que es enviada desde los diferentes request
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//Configuración de Cors para que se puedan enviar peticiones desde cualquier dominio
app.use(cors());

//Configuración de las rutas que vienen desde el archivo  Routes
app.use(productRoutes);
app.use(saleRoutes);

export default app;
