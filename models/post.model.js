const mongoose = require('mongoose');
const {isEmail} = require('validator');

const postSchema = new mongoose.Schema(
{
    title:{
        required:true,
        minLength: 3,
        maxLength: 55,
        type:String,
        // Supprime les espaces
        trim:true
    },
    content:{
        required:true,
        minLength: 3,
        maxLength: 55,
        type:String,
        // Supprime les espaces
        trim:true
    },
    id_user:{
        required: true,
    }
},
{
  timestamps: true,
}
);
const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;