import express from 'express'
import ClientsController from '../controllers/clients'

const router = express.Router()

router.route('/')
    .get(ClientsController.clients)

router.route('/:id')
    .get(ClientsController.clientById)


export default router    