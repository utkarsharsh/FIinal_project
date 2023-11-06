
import mongoose from "mongoose";




 async function Datastructure(){

try{
    await mongoose.connect('mongodb+srv://harshupadhyay7786:mnbvcxz@cluster0.ypptwdf.mongodb.net/final');}
   catch (err){
   console.log(err);
   }
   
 return( new mongoose.Schema({
   
       name: String,
       password: String,
       imageurl:String,
     }));
    }
    export default Datastructure 