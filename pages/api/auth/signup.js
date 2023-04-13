import { Mongoconnect } from "../../../database/dbconnect";
import userModel from "../../../database/models/user.model";

const bycrypt = require("bcrypt");

//------------------------------signup--------------------------------------//

export default async function handler(req,res){
   await Mongoconnect();

   const { name, email, password, mobile, address } = req.body;

       if (!name && name === "" &&
           !email && email === "" &&
           !password && password === "" &&
           !mobile && mobile === "" &&
           !address && address === "") 
           {
           return res.status(200).send({ message: "Invalid Inputs" })
       }

   try { 

       let oldUser = await userModel.findOne({ email });

       if (oldUser) {
        console.log("old",oldUser);
           return res.status(200).send({ message: "User already registered" });
       }

       let passHash = bycrypt.hashSync(password,6);
       let user = new userModel({
               name,
               email,
               password: passHash,
               mobile,
               address
       });
       await user.save();
       res.status(201).send({message : "User registered successfully"});

   } catch (err) {
       res.send(err.message);
   }

}