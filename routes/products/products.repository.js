import { pool } from "../database/supabase-db.js";

export class ProductsRepository{

    // 1. obteniendo todos los registros de la tabla products :p
    getAllProducts = async () => {
        const result = await pool.query("SELECT * FROM products");
        return result.rows;
    }

    // 2. filtrando productos con price < 50
        getProductsUnder50 = async () => {
            const result = await pool.query("SELECT * FROM products WHERE price < 50");
            return result.rows; 
        }
}
