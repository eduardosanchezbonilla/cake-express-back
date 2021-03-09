import express from 'express'
import ProductsController from '../controllers/products'

const router = express.Router()

router.route('/')
    .get(ProductsController.products)
    .post(ProductsController.addProduct)

router.route('/:id')
    .get(ProductsController.productById)
    .put(ProductsController.updateProductById)
    .delete(ProductsController.deleteProductById)


export default router    