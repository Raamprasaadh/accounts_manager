const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subtypesSchema = new Schema({
    name:{
        type:String
    }
});


const expense_business=mongoose.model('expense_business_types',subtypesSchema);

const expense_personal =  mongoose.model('expense_personal_types',subtypesSchema);
                                       
const income = mongoose.model('income_types',subtypesSchema);

const investment = mongoose.model('investment_types',subtypesSchema);


module.exports= {expense_business, expense_personal, income, investment};