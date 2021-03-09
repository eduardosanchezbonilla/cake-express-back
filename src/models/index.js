import db from '../database'
import ClientSchema from './clients'
import ProductSchema from './products'

export const Client = () => 
    db.connection().model('Client',ClientSchema)

export const Product = () => 
    db.connection().model('Product',ProductSchema)    