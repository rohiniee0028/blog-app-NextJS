import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    description : {
        type : String,
        required : true
    }
},
{
    timestamps: true,
    versionKey: false,
})

export default mongoose.models.blogModel || mongoose.model("blogModel",blogSchema);