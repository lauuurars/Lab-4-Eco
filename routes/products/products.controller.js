export class ProductsController {

    constructor(repository) {
        this.repository = repository; 
    }

    getAllProducts = async (req, res) => {
        const products = await this.repository.getAllProducts();

        res.send({
            products: products
        })
    }
}