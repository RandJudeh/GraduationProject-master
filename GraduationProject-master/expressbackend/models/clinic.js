import mongoose from "mongoose";
const schema =new mongoose.Schema
({  //to define a shape and content of the doc
    name : {
        type : String,
        required: true
    },
    doctor : {
        type: String,
        required: true,
        
    },
    country : {
        type: String,
        required: true,
        
    },
    address : {
        type: String,
        required: true,
        
    },
    information: String,
    status : String
})


const Clinicdb = mongoose.model('clinicdbfinal', schema);

export default Clinicdb 
//user =>clinic