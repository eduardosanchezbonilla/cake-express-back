import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        price: {type:Number, required:true}      
    },
    {
        strict: false
    }
)

ProductSchema.statics.getById = function (id) {
    return this.findOne({_id: id})
        .lean()
        .exec()
}

ProductSchema.statics.getAll = function (){
    return this.find()
        .sort({name: 'asc'})
        .exec()
}

export default ProductSchema