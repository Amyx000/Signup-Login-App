const mongoose = require("mongoose");
const productschema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

mongoose.pluralize(null);
const user= mongoose.model("sign", productschema);

module.exports=user;