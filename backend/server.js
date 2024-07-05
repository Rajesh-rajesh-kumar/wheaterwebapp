const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const mongoos=require('mongoose');
const connectDB = require('./config/db');


// console.log(users)


const {errorHandler}=require("./Middleware/errorMiddleware")

const app=express();

app.use(cors());

dotenv.config();

app.use(express.json());
const PORT=process.env.PORT||8080
connectDB();

// console.log(process.env.PORT)

app.get("/" , (req,res)=>{
     res.status(200).json({
        message:"Hi server ,This is Redux Project"
     })
})


app.use("/api/v1/auth",require("./Routes/userRoute"));
app.get("/wheaterdata",require('./Routes/wheaterRoute'))





app.use(errorHandler);
// app.get("/products",(req,res)=>{
//     res.status(200).json({
//          products
//     })
// })

// app.get("/product/:id",(req,res)=>{
//     console.log(req.params)
//      const product=products.find((p)=>p._id===req.params.id);
//      res.status(200).json({
//         product 
//      })
// })

app.listen(PORT,()=>{
    console.log(  `Server is Running on port ${PORT}`)
})


