const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const typesSchema = new Schema(
    {
    name:{
        type:String
    }
});
var chooseType = mongoose.model('types', typesSchema);



module.exports = chooseType;