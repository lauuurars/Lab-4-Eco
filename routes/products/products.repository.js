import { pool } from "../database/supabase-db.js";

// 1. obteniendo todos los registros de la tabla products :p
export class ProductsRepository{
    getAllProducts = async () => {
        const result = await pool.query("SELECT * FROM products");
        return result.rows;
    }
}