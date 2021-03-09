import express from 'express'
import ClientsController from '../controllers/clients'

const router = express.Router()

router.route('/')
    .get(ClientsController.clients)
    .post(ClientsController.addClient)

router.route('/:id')
    .get(ClientsController.clientById)
    .put(ClientsController.updateClientById)
    .delete(ClientsController.deleteClientById)


export default router    