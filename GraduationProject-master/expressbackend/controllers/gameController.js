import Gamedb from "../models/game.js";
class gameController{
    static getAllDoc=async(req,res)=>{
        try{
           const result= await Gamedb.find()
           res.send(result)
        }catch(err){
             console.log(err)
        }
    }
}


export default gameController