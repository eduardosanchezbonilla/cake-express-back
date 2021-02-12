import clients from './routes/clients'

export default app=> {
    app.use('/clients', clients)
}