import clients from './routes/clients'
import products from './routes/products'

export default app=> {
    app.use('/clients', clients)
    app.use('/products', products)
}