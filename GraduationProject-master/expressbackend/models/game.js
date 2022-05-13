import mongoose from "mongoose";
const schema  =new mongoose.Schema
({  //to define a shape and content of the doc
    name : {
        type : String,
        required: true
    },
    describtion : {
        type: String,
        required: true,
    },
    type : {type:String},
    stores: {type:String}
})
const Gamedb = mongoose.model('gamedb', schema);
export default Gamedb



