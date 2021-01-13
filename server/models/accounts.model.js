const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    date:{
        type: Date,
        required:true
    },
    accounts_type:{
        type:String,
        required:true,
        minlength:6
    },
    sub_type:{
        type:String,
        required:true,
        minlength:6
    },
    amount:{
        type:Number,
        required:true,
    },
    reason:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

const Accounts = mongoose.model('accounts', accountsSchema);

module.exports = Accounts;