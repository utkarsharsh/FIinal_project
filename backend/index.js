import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import  cors  from 'cors';
import path from 'path';


// import fileUpload from 'express-fileupload'
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();


//cloudnary config..
cloudinary.config({ 
    cloud_name: 'disggmk1g', 
    api_key: "362658237867212", 
    api_secret: "_sNWAP6yzzCz3ZLbYgA_HEx7Gls",
  });
      //

    


// app.use(fileUpload());
try{
 await mongoose.connect('mongodb+srv://harshupadhyay7786:mnbvcxz@cluster0.ypptwdf.mongodb.net/final');}
catch (err){
console.log(err);
}
const kittySchema = new mongoose.Schema ({
useroriginalname:String,
    name: String,
    password: String,
    Avatar:String,
    suboodhreviews  : [{
    reviewstext: String,
    reviewurl: String,
    names:String,
}],
suboodhrating:Number,
 

    
 Swad : {

        reviewpoint :Number,
        reviews : [{
            reviewstext: String,
            reviewurl: String,
            name:String,
        }],
         
        
            },
          Hostle : {

                reviewpoint :Number,
                reviews : [{
                    reviewstext: String,
                    reviewurl: String,
                }],
                 
                
                    },
           Laxmidrinks : {

                        reviewpoint :Number,
                        reviews : [{
                            reviewstext: String,
                            reviewurl: String,
                        }],
                         
                        
                            },
    others:
        [{
            name: String,
            identity:String,
            caption:String,
            
            eventurl : String,
           
        }]
    
  
  });

//multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './backend/uploads')
    },
    filename: (req, file, cb) => {
       
        console.log(file);
        cb(null, file.originalname + '-' + Date.now());
    }
});

var upload = multer({ storage: storage });






  const jwtSecretKey=process.env.SECRETKEY;

const userinfo = mongoose.model("userinfo",kittySchema);






// regiter


app.post("/submit", async(req,res)=>{
   

 console.log(req.body);




 



// bycrption
if(req.body.password != '' &&   req.body.name!='' && req.body.useroriginalname!=''){
bcrypt.genSalt(10,  async function(err, salt) {
    bcrypt.hash(req.body.password, salt, async function(err, hash) {
if(err){
    console.log(err);
}
else{
let m= "already exits"
  let p=  await userinfo.findOne({name:req.body.name});
  
  if(p!=null)
    res.status(205).send("already exits");
  
  else{
    
        const user = new userinfo({ name:req.body.name,  password:hash,useroriginalname:req.body.useroriginalname });
      await  user.save();
      console.log(user);
      const jwtSecretKey= process.env.SECRETKEY;
      const token = jwt.sign({
        id:user._id,
      }, "KEH_DO_TUMHE_YA_CHUP_RAHU"); 

      res.send(token);
        }
}
    })}
    );
}
else{
    res.status(206).send("Fill all the values ");
}});

    // login 
    app.post("/login",async (req,res)=>{
        console.log(req.body);
        if(req.body.password=="" || req.body.name=="" ){
            res.status(404).send("Fill information");
        }
        else{
  const userpassword= await userinfo.findOne({name : req.body.name});
 console.log(userpassword);
 if(userpassword==null) {
    res.send("something is wrong ");
    return;
 }
  bcrypt.compare(req.body.password,userpassword.password, async function  (err, response) {

    if(response){
        const jwtSecretKey=process.env.SECRETKEY; 
        
       
        const token =     jwt.sign({
          id:userpassword._id,
        },"KEH_DO_TUMHE_YA_CHUP_RAHU" ); 
       
       res.send(token);
        
    }
    else {
        res.send("Password did not match");
    }
});
        }
    });
    




 let totaluser= await userinfo.find();
    // console.log(totaluser);    

app.get("/origin", async (req,res)=>{
    console.log(req.headers);
    let token=req.headers.authorization;+

console.log(token);
if(token==null){
    res.send("nobro");
    console.log("m");
}
else {
    token=token.split(" ");
    const verified = jwt.verify(token[1], "KEH_DO_TUMHE_YA_CHUP_RAHU"); 
    let currentuser= await userinfo.findOne({_id: verified.id})
    if(verified){

        res.send({
            totalusers:totaluser,
            currentusers :currentuser

        });
    }
    else{
        res.send(
           "nobro"  );
    }}
});


app.post("/others" , upload.single('image' ), async (req,res)=>{
    let eventurl="";
    console.log(req.file);
    await cloudinary.uploader.upload(req.file.path,
        { public_id:req.body.name },function  (error,result){
           
            eventurl=result.url;
        });
 await userinfo.findOneAndUpdate(req.body.username, {$push : {others:{
name:req.body.name,
 eventurl : eventurl,
 caption: req.body.caption,}
 }})
 console.log(eventurl);}
)



app.get("/suboodh",async(req,res)=> {
    let totaluser= await userinfo.find();
   let p=[];
 totaluser.map((e)=>{
    console.log(e.suboodhreviews.length);
if(e.suboodhreviews.length != 0){
    p.push(e);
}

}


)

res.send(p);
});


app.post("/suboodh",async(req,res)=> {
   const user= await userinfo.findOneAndUpdate({name:req.body.name}, {
    
       $push:{
        suboodhreviews:{
            reviewstext: req.body.reviewstext,
            reviewurl: "jai ho",
            names:req.body.name,
        }
    },
      }).then((response)=>{
        console.log(response);
      })
     
      const user2= await userinfo.findOneAndUpdate({name:req.body.name}, {
    
        suboodhrating:req.body.rating,
     },
    )



});








app.listen(80,(err)=>{
    console.log(err);
});