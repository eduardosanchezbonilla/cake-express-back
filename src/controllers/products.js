import { Product } from '../models'

class ProductsController {
    async products(req, res, next){        
        const data = await Product().getAll()
        return res
            .status(200)
            .json(data)
    }

    async productById(req, res, next){
        const data = await Product().getById(req.params.id)
        return res
            .status(200)
            .json(data)
    }

    async addProduct(req, res, next){
        const newProduct = Product () ({
            name: req.body.name,
            price: req.body.price
        })

        const data = await newProduct.save()

        return res
            .status(201)
            .json(data)
    }

    async updateProductById(req, res, next){
        const newProduct = {
            name: req.body.name,
            price: req.body.price
        }

        await Product()
            .findOneAndUpdate(
                {_id:req.params.id},
                newProduct
            )

        const data = await Product().getById(req.params.id)
          
        return res
            .status(200)
            .json(data)
    }

    async deleteProductById(req, res, next){
        
        const data = await Product().getById(req.params.id)

        await Product().deleteOne({_id:req.params.id})

        return res
            .status(200)
            .json(data)
    }
}

export default new ProductsController()