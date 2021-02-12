import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import {config} from 'dotenv'

const SETTINGS = config()  // config de dotenv (carga variables del .env)

export default app => {
    app.disabled('x-powered-by')  // para que no se sepa que nuestra api esta hecha en express

    app.set('env', SETTINGS.parsed.ENV)
    app.set('config', SETTINGS.parsed)
    app.locals.env = app.get('env')
    app.locals.config = app.get('config')

    // anadimos el logger con el midelware morgan
    app.use(logger('combined'))

    // otro midelware
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    // anadimos cors
    app.use(cors())

}

