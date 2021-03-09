import { Client } from '../models'

class ClientsController {
    async clients(req, res, next){        
        const data = await Client().getAll()
        return res
            .status(200)
            .json(data)
    }

    async clientById(req, res, next){
        const data = await Client().getById(req.params.id)
        return res
            .status(200)
            .json(data)
    }

    async addClient(req, res, next){
        const newClient = Client () ({
            name: req.body.name,
            document: req.body.document,
            telephone: req.body.telephone,
            address: req.body.address,
            city: req.body.city,
            province: req.body.province,
            postalCode: req.body.postalCode
        })

        const data = await newClient.save()

        return res
            .status(201)
            .json(data)
    }

    async updateClientById(req, res, next){
        const newClient = {
            name: req.body.name,
            document: req.body.document,
            telephone: req.body.telephone,
            address: req.body.address,
            city: req.body.city,
            province: req.body.province,
            postalCode: req.body.postalCode
        }

        await Client()
            .findOneAndUpdate(
                {_id:req.params.id},
                newClient
            )

        const data = await Client().getById(req.params.id)
          
        return res
            .status(200)
            .json(data)
    }

    async deleteClientById(req, res, next){
        
        const data = await Client().getById(req.params.id)

        await Client().deleteOne({_id:req.params.id})

        return res
            .status(200)
            .json(data)
    }
}

export default new ClientsController()