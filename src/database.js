import mongoose from 'mongoose'
import { config } from 'dotenv'

const SETTINGS = config()

class Database {
    constructor(){
        this.conn = false;
    }

    connection (){
        return this.conn;
    }

    connect(){
        const host = `${SETTINGS.parsed.DB_PROTOCOL}://${SETTINGS.parsed.DB_URL}:${SETTINGS.parsed.DB_PORT}/${SETTINGS.parsed.DB_NAME}`

        return new Promise(resolve => {
            mongoose.set('debug', SETTINGS.parsed.DB_DEBUG)  // decimos a mongo que estamos en modo debug
            mongoose.Promise = global.Promise                // decimos a mongo que use sistema de probmesas globañ

            this.conn = mongoose.createConnection(
                host,
                { poolSize: SETTINGS.parsed.DB_POOLSIZE }
            )

            this.conn.on('error', err => {              // si ha habido error
                console.log('Mongo Error', err)
                return process.exit()
            })

            this.conn.on('connected', () => {           // si la conexion ha sido correcta
                console.log('Connected to Database')
                resolve()                               // resolvemos la promesa
            })  
        })
    }
}

const instance = new Database()

export default instance

