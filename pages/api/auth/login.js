import { Mongoconnect } from "../../../database/dbconnect";
import userModel from "../../../database/models/user.model";

const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

//-------------------------login----------------------------------------//

export default async function handler(req, res) {
    const { email, password } = req.body;

    try {
        await Mongoconnect();

        let user = await userModel.findOne({ email });

        if (user) {
            let hashed_password = user.password;
            bycrypt.compare(password, hashed_password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ userID: user._id, role: user.role, name: user.name }, "hush");
                    res.status(200).send({ message: "success", token: token, name: user.name, role: user.role });
                } else {
                    res.status(200).send({ message: "incorrect password" });
                }
            });
        }
        else {
            res.status(400).send({ message: "error" });
        }
    } catch (e) {
       console.log(err);
    }
}
