import express from "express"

import { ProductsController } from "./products.controller.js";
import { ProductsRepository } from "./products.repository.js";

const repository = new ProductsRepository();
const controller = new ProductsController(repository);

const router = express.Router()

// endpoint 
router.get("/", controller.getAllProducts);

export default router;