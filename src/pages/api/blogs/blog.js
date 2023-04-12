import { Mongoconnect } from "../../../../database/dbconnect";
import blogModel from "../../../../database/models/blog.model";

const bycrypt = require("bcrypt");

export default async function handler(req, res) {

    await Mongoconnect()

    switch(req.method){
        case "POST" :{
            const { author, title, image, description } = req.body;

            if (!author && author === "" &&
                !title && title === "" &&
                !description && description === "") {
    
                return res.status(200).send({ message: "Invalid Inputs" })
            }
    
            try {
                let blog = new blogModel({ author, title, image, description });
                await blog.save();
                res.status(201).send({ message: "Blog created successfully", blog: blog });
    
            } catch (err) {
                res.send(err.message);
            }
        }
        case "GET" :{
            try{
               let data = await blogModel.find();
               res.status(200).send(data);
            }
            catch(err){
                res.send(err.message);
            }
        }
        default : {
            res.send({message : "Error"})
        }
    }
}