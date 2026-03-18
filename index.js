import express from "express";
import path from "path";
import ProductsRouter from "./routes/products/products.router.js";

const PORT = 8080;
const __dirname = import.meta.dirname;

const app = express();

app.use(express.json());

app.use("/products", ProductsRouter);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("listening on port: ", PORT);
});