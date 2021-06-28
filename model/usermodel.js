const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const students=new Schema(
    {
        name:{type:String},
        email:{type:String},
        phone:{type:Number}
    }
)

module.exports=mongoose.model("students",students);