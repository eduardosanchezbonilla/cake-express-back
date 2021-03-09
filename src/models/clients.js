import mongoose from 'mongoose'

const ClientSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        document: {type:String, required:true},          
        telephone: {type:String, required:false},           
        address: {type:String, required:false},          
        city: {type:String, required:false},         
        province: {type:String, required:false},            
        postalCode: {type:String, required:false}       
    },
    {
        strict: false
    }
)

ClientSchema.statics.getById = function (id) {
    return this.findOne({_id: id})
        .lean()
        .exec()
}

ClientSchema.statics.getAll = function (){
    return this.find()
        .sort({name: 'asc'})
        .exec()
}

export default ClientSchema