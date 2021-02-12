class ClientsController {
    clients(req, res, next){
        return res
            .status(200)
            .json({key: 'value'})
    }

    clientById(req, res, next){
        return res
            .status(200)
            .json({id: req.params.id})
    }
}

export default new ClientsController()