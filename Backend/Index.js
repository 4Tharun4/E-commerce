const express = require("express");

const cors = require("cors");
const mongo = require("mongoose")
const jwt = require("jsonwebtoken");
const multer = require("multer")
const Server = express();
const path = require("path");
const { default: mongoose } = require("mongoose");
Server.use(express.json())

const port = 5000;

Server.use(cors())


const db = mongo.connect("mongodb+srv://tharungv4:TharunReddy123@cluster0.oy51sa6.mongodb.net/E-commerce");
if(!db){
    console.log("db not connnected");
}else{
    console.log("connnected");
}

Server.get("/",(req,res)=>{
res.send("Server is running hiii" + port)
})


//backend data strorage 
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//

const product = mongoose.model("product",{
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    new_price:{
        type:Number,
        require:true
    },
    old_price:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,
        require:true
    },

    Availabale:{
        type:Boolean,
        default:true
    }
})


Server.post('/addproduct',async (req,res)=>{

    let products = await product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }else{
        id=1;
    }
    const Product = new product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        description:req.body.description

    });
    console.log(Product);
    await Product.save();
    console.log("saved");

    res.json({
        result :true,
        name:req.body.name

    })
})

//remove product

Server.post("/removeproduct",async(req,res)=>{
    await product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        result:true,
       name: req.body.name
    })
})


//all products

Server.get("/allproducts",async(req,res)=>{
let get_all = await product.find({})
res.send(get_all);
})
//data api end point

const upload = multer({storage:storage});
Server.use('/images',express.static('./upload/images'))
Server.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        result:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`

    })
console.log(req.file.filename);

})


//users schema
const users = mongoose.model('users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,

    },
    cartdetails:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }
})

//creating api for registering the user
Server.post("/signup",async(req,res)=>{
    let check = await users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({sucess:false,error:"existing user found "})
    }
    let cart ={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user = new users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartdata:cart,

    })
    await user.save();

    const data  =  {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,"secet_ecom");
    res.json({sucess:true,token})


})
//userlogin

Server.use("/login",async(req,res)=>{
    let user = await users.findOne({email:req.body.email});
    if(user){
        const passcom = req.body.password === user.password
        if(passcom){
            const data = {
                user:{
                    id:user.id
                }
              

                }
                const token = jwt.sign(data,"secet_ecom");
                res.json({sucess:true,token})
            

        }else{
            res.json({sucess:false,error:"Worng Password"})
        }

    }else{
        res.json({sucess:false,error:"Worng emailid"} )
    }
})

Server.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
})