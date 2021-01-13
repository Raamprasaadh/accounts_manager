const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv").config();

//express server

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())

const uri ="mongodb://localhost/accounts_manager";
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
.then(()=>console.log("DB connection successful"))
.catch((err)=>console.error(err)
);

const accountsRoute = require('./routes/accounts');
const typesRoute = require('./routes/types');

app.use('/accounts', accountsRoute);
app.use('/types',typesRoute);

app.listen(port,()=>{
    console.log(`server is running on port:${port} `);
})