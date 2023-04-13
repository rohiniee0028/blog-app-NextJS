import mongoose from "mongoose";

export const Mongoconnect = async () => {   
     await mongoose.connect(process.env.MONGO_URL,{
          
     })
     .then((res)=>console.log(" Database Connected"))
     .catch((err)=>console.log(err))
}