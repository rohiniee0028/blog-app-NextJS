import { Mongoconnect } from "../../../database/dbconnect";
import blogModel from "../../../database/models/blog.model";

const bycrypt = require("bcrypt");

export default async function handler(req, res) {

    await Mongoconnect()

    switch (req.method) {

        case "POST": {

            //--------------------------post blog----------------------------------//

            const { author, title, image, description } = req.body;

            if (!author && author === "" &&
                !title && title === "" &&
                !description && description === "") {

                return res.send({ message: "Invalid Inputs" })
            }

            try {
                let blog = new blogModel({ author, title, image, description });
                await blog.save();
                return res.status(201).send({ message: "Blog created successfully" });

            } catch (err) {
                console.log(err);
            }
        }

        case "GET": {

            //-----------------get all blogs-----------------------------------------//

            try {
                let data = await blogModel.find();
                return res.status(200).send(data);
            }
            catch (err) {
                console.log(err);
            }
        }

        default: {
            return res.send({ message: "Error" })
        }
    }
}