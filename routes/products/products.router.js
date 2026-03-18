import express from "express"

import { ProductsController } from "./products.controller.js";
import { ProductsRepository } from "./products.repository.js";

const repository = new ProductsRepository();
const controller = new ProductsController(repository);

const router = express.Router()

// endpoint todos los productos
router.get("/", controller.getAllProducts);

// endpoint productos precio < 50
router.get("/under-50", controller.getProductsUnder50);

export default router;